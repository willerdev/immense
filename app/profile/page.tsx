"use client";

import { 
  Settings, LogOut, ShoppingBag, CreditCard, 
  Bell, HelpCircle, User as UserIcon, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';
import { useAuthStore } from '@/lib/store';
import { signOut } from '@/lib/actions/auth';
import { useRouter } from 'next/navigation';

const menuItems = [
  {
    icon: ShoppingBag,
    label: 'Orders',
    info: '12 orders',
  },
  {
    icon: CreditCard,
    label: 'Payment Methods',
    info: '3 cards',
  },
  {
    icon: Bell,
    label: 'Notifications',
    info: '2 new',
  },
  {
    icon: HelpCircle,
    label: 'Help Center',
  },
  {
    icon: Settings,
    label: 'Settings',
  },
];

export default function ProfilePage() {
  const { user } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary-foreground/10">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt={user.displayName || 'Profile'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
                {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold">{user.displayName || 'User'}</h1>
            <p className="text-primary-foreground/80">{user.email}</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="bg-card rounded-lg border divide-y">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.info && (
                    <span className="text-sm text-muted-foreground">
                      {item.info}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-4 text-destructive"
          >
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-card rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Premium Member</p>
                <p className="text-sm text-muted-foreground">
                  Valid until Dec 2024
                </p>
              </div>
            </div>
            <button className="text-sm text-primary font-medium">
              View Benefits
            </button>
          </div>
        </div>

        <div className="bg-card rounded-lg border p-4 space-y-4">
          <h2 className="font-semibold">Account Information</h2>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Account Created</p>
              <p className="font-medium">
                {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Sign In</p>
              <p className="font-medium">
                {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}