"use client";

import { useRouter } from 'next/navigation';
import { BarChart3, Package, ShoppingCart, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';

const stats = [
  { label: 'Total Orders', value: '156', icon: ShoppingCart },
  { label: 'Products', value: '32', icon: Package },
  { label: 'Customers', value: '289', icon: Users },
  { label: 'Revenue', value: '£15,234', icon: BarChart3 },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-primary-foreground/80">Welcome back, User</p>
      </header>

      <main className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card p-4 rounded-lg border shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <h2 className="font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div
                key={order}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">Order #{order}23456</p>
                  <p className="text-sm text-muted-foreground">2 items</p>
                </div>
                <span className="text-sm font-medium text-primary">£99.00</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}