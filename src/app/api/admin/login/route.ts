import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateAuthToken } from '@/lib/auth';

const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  if (!attempts) return false;
  
  // Reset after 15 minutes
  if (now - attempts.lastAttempt > 15 * 60 * 1000) {
    loginAttempts.delete(ip);
    return false;
  }
  
  // Max 5 attempts
  return attempts.count >= 5;
}

function recordAttempt(ip: string) {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  if (!attempts) {
    loginAttempts.set(ip, { count: 1, lastAttempt: now });
  } else {
    attempts.count++;
    attempts.lastAttempt = now;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get IP from headers (works in production)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many attempts. Try again in 15 minutes.' },
        { status: 429 }
      );
    }
    
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { success: false, message: 'Password required' },
        { status: 400 }
      );
    }
    
    const isValid = await verifyPassword(password);
    
    if (!isValid) {
      recordAttempt(ip);
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
    
    // Clear attempts on successful login
    loginAttempts.delete(ip);
    
    const token = generateAuthToken();
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('admin-auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/'
    });
    
    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}