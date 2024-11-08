"use client";

import { Home, LayoutGrid, ShoppingCart, Heart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/catalog', icon: LayoutGrid, label: 'Catalog' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
    { href: '/favorites', icon: Heart, label: 'Favorites' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex items-center justify-around py-2">
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center p-2",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="nav-icon" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}