"use client";

import { 
  Settings, LogOut, ShoppingBag, CreditCard, 
  Bell, HelpCircle, User as UserIcon, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';

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
  {
    icon: LogOut,
    label: 'Log Out',
    danger: true,
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary-foreground/10">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-primary-foreground/80">john.doe@example.com</p>
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
                className={`w-full flex items-center justify-between p-4 ${
                  item.danger ? 'text-destructive' : ''
                }`}
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
      </main>
    </div>
  );
}