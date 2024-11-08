"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
            I
          </div>
          <h2 className="text-2xl font-bold">Create an account</h2>
          <p className="text-muted-foreground mt-2">Join Immense today</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-3 font-medium"
            >
              <UserPlus className="w-5 h-5" />
              Create account
            </button>
          </div>
        </form>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}