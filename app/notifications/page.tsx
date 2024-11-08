"use client";

import { Bell, Package, CreditCard, Tag } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "Order Delivered",
    message: "Your order #12345 has been delivered successfully",
    time: "2 hours ago",
    icon: Package,
    read: false,
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Payment of £299.99 was processed successfully",
    time: "5 hours ago",
    icon: CreditCard,
    read: false,
  },
  {
    id: 3,
    title: "Flash Sale Alert",
    message: "Don't miss out! 50% off on all electronics",
    time: "1 day ago",
    icon: Tag,
    read: false,
  },
  {
    id: 4,
    title: "Welcome to Immense",
    message: "Thank you for joining our community",
    time: "2 days ago",
    icon: Bell,
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Notifications</h1>
        <button className="text-sm text-primary">Mark all as read</button>
      </header>

      <main className="p-4">
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.read ? 'bg-card' : 'bg-secondary/30'
                }`}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}