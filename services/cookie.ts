'use server';

import { cookies } from "next/headers";

type CookieOptions = {
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
  sameSite?: 'lax' | 'strict' | 'none';
  secure?: boolean;
  httpOnly?: boolean;
};

// Default options for cross-domain cookies
const defaultCrossOriginOptions: CookieOptions = {
  path: '/',
  sameSite: 'none',
  secure: true,
};

// Server-side implementation
export const setCookie = async (name: string, value: string, options: CookieOptions = {}) => {
  // Merge with default options
  const mergedOptions = { ...defaultCrossOriginOptions, ...options };
  
  if (typeof window === 'undefined') {
    // Server-side
    try {
      const cookieStore = await cookies();
      cookieStore.set(name, value, mergedOptions);
    } catch (error) {
      console.error('Error setting cookie:', error);
      throw new Error('Failed to set cookie');
    }
  } else {
    // Client-side
    document.cookie = `${name}=${value}; ${Object.entries(mergedOptions)
      .map(([key, value]) => {
        if (value === undefined) return '';
        if (key === 'maxAge') return `max-age=${value}`;
        if (key === 'sameSite') return `SameSite=${value}`;
        if (key === 'httpOnly') return '';
        return `${key}=${value}`;
      })
      .filter(Boolean)
      .join('; ')}`;
  }
};

export const getCookie = async (name: string): Promise<string | null> => {
  if (typeof window === 'undefined') {
    // Server-side
    try {
      const cookieStore = await cookies();
      const cookie = cookieStore.get(name);
      return cookie?.value || null;
    } catch (error) {
      console.error('Error getting cookie:', error);
      return null;
    }
  } else {
    // Client-side
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
};

export const deleteCookie = async (name: string) => {
  if (typeof window === 'undefined') {
    // Server-side
    try {
      const cookieStore = await cookies();
      cookieStore.delete(name);
    } catch (error) {
      console.error('Error deleting cookie:', error);
      throw new Error('Failed to delete cookie');
    }
  } else {
    // Client-side
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; sameSite=none; secure=true;`;
  }
};

export const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}