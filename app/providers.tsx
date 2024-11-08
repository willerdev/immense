"use client";

import { useAuth } from '@/hooks/useAuth';

export function Providers({ children }: { children: React.ReactNode }) {
  useAuth(); // Initialize auth listener
  return <>{children}</>;
}