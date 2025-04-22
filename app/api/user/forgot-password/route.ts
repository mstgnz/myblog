import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Request password reset
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      // Don't reveal that user doesn't exist for security
      return NextResponse.json(
        { message: 'If your email exists in our system, you will receive a password reset link' },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1); // Token valid for 1 hour

    // Update user with reset token (using code field for reset token)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        code: resetToken,
      }
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
    });

    // Set up email content
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/auth/reset-password?token=${resetToken}`;
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@example.com',
      to: user.email,
      subject: 'Password Reset',
      html: `
        <p>You requested a password reset.</p>
        <p>Click this <a href="${resetUrl}">link</a> to reset your password.</p>
        <p>This link is valid for 1 hour.</p>
      `,
    };

    // Send email (in production, use proper queue)
    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Reset password link:', resetUrl);
    }

    return NextResponse.json({
      message: 'If your email exists in our system, you will receive a password reset link'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
} 