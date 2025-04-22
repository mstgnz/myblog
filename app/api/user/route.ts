import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';

interface UserData {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

// Register a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, password } = body;

    // Validate input
    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json(
        { error: 'First name, last name, email and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      }
    });
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        id: newUser.id, 
        email: newUser.email, 
        firstname: newUser.firstname, 
        lastname: newUser.lastname 
      },
      process.env.JWT_SECRET || 'myJWTsecret',
      { expiresIn: '12h' }
    );

    // Create response
    const response = NextResponse.json({
      user: {
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      },
      token,
    });

    // Set cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 12 * 60 * 60, // 12 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Something went wrong during registration' },
      { status: 500 }
    );
  }
}

// Login user
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.users.findUnique({
      where: { email }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login time
    await prisma.users.update({
      where: { id: user.id },
      data: { last_login: new Date() }
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        firstname: user.firstname, 
        lastname: user.lastname 
      },
      process.env.JWT_SECRET || 'myJWTsecret',
      { expiresIn: '12h' }
    );

    // Create response
    const response = NextResponse.json({
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      token,
    });

    // Set cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 12 * 60 * 60, // 12 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Something went wrong during login' },
      { status: 500 }
    );
  }
}

// Logout user
export async function DELETE() {
  try {
    // Create response
    const response = NextResponse.json({ message: 'Logged out successfully' });
    
    // Clear the token cookie
    response.cookies.delete('token');
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Something went wrong during logout' },
      { status: 500 }
    );
  }
}

// Get current user
export async function GET() {
  try {
    const cookieStore = cookies();
    const tokenCookie = (await cookieStore).get('token');
    
    if (!tokenCookie?.value) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    try {
      // Verify token
      const decoded = jwt.verify(
        tokenCookie.value, 
        process.env.JWT_SECRET || 'myJWTsecret'
      ) as UserData;
      
      // Find user
      const user = await prisma.users.findUnique({
        where: { id: Number(decoded.id) }
      });
      
      if (!user) {
        const response = NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
        response.cookies.delete('token');
        return response;
      }
      
      return NextResponse.json({
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        }
      });
    } catch (error) {
      // Token is invalid
      const response = NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
      response.cookies.delete('token');
      return response;
    }
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
} 