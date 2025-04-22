'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const endpoint = isLogin ? '/api/user' : '/api/user';
      const method = isLogin ? 'PUT' : 'POST';
      const body = isLogin
        ? JSON.stringify({ email, password })
        : JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email,
            password,
          });

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      // Check content type before trying to parse JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(
          `Server error: Expected JSON but got ${contentType || 'unknown content type'}`
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
      setUser(data.user);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'DELETE',
      });

      // Check content type before trying to parse JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(
          `Server error: Expected JSON but got ${contentType || 'unknown content type'}`
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Logout failed');
      }

      setUser(null);
      setMessage('Logged out successfully');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/user');

      // Check content type before trying to parse JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(
          `Server error: Expected JSON but got ${contentType || 'unknown content type'}`
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Not authenticated');
      }

      setUser(data.user);
      setMessage('User authenticated');
    } catch (error: any) {
      setUser(null);
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Register'}</h1>

      {message && <div className="mb-4 p-2 bg-gray-100 border rounded">{message}</div>}

      {user ? (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Logged in as:</h2>
          <p>
            Name: {user.firstname} {user.lastname}
          </p>
          <p>Email: {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={!isLogin}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>

            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Need an account?' : 'Already have an account?'}
            </button>
          </div>
        </form>
      )}

      {!user && (
        <button
          onClick={checkAuth}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
        >
          Check Authentication
        </button>
      )}
    </div>
  );
}
