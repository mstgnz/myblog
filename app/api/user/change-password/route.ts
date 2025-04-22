import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

interface UserData {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}

// Change password for authenticated user
export async function POST(request: NextRequest) {
  try {
    // Authenticate user
    const cookieStore = cookies();
    const tokenCookie = (await cookieStore).get('token');
    
    if (!tokenCookie?.value) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    let decoded;
    try {
      // Verify token
      decoded = jwt.verify(
        tokenCookie.value, 
        process.env.JWT_SECRET || 'myJWTsecret'
      ) as UserData;
    } catch (error) {
      const response = NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
      response.cookies.delete('token');
      return response;
    }
    
    // Get request body
    const body = await request.json();
    const { currentPassword, newPassword } = body;
    
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      );
    }
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      const response = NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
      response.cookies.delete('token');
      return response;
    }
    
    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      );
    }
    
    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    // Update user password
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword
      }
    });
    
    return NextResponse.json({
      message: 'Password changed successfully'
    });
  } catch (error) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
} 