import { MapPin, Bell, ShoppingCart, User, Search } from 'lucide-react';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';
import Image from 'next/image';

export default function Header() {
  const { user } = useAuthStore();

  return (
    <header className="border-b">
      {/* Mobile Header */}
      <div className="md:hidden p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              Im
            </div>
            <span className="font-bold text-lg">Immense</span>
          </Link>
          <div className="flex items-center gap-3">
            {user && (
              <Link href="/profile" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || 'Profile'}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm font-bold">
                      {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                    </div>
                  )}
                </div>
              </Link>
            )}
            <Link
              href="/notifications"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <p>92 High Street, London</p>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                Im
              </div>
              <span className="font-bold text-xl">Immense</span>
            </Link>

            <div className="flex-1 max-w-xl mx-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/cart" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                    2
                  </span>
                </div>
                <span className="font-medium">Cart</span>
              </Link>

              {user ? (
                <Link href="/profile" className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || 'Profile'}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-lg font-bold">
                        {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.displayName || 'Profile'}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                  </div>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Sign In</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}