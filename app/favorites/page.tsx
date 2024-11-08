"use client";

import { Trash2 } from 'lucide-react';
import Image from 'next/image';

const favoriteItems = [
  {
    id: 1,
    name: 'MacBook Pro 14" M3 Pro',
    price: 1999.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500',
    discount: '10% OFF',
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: 379.00,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500',
    discount: '15% OFF',
  },
  {
    id: 3,
    name: 'iPad Air (5th generation)',
    price: 599.00,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500',
    discount: '5% OFF',
  },
];

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Favorites</h1>
        <button className="text-sm text-primary">Clear all</button>
      </header>

      <main className="p-4">
        <div className="space-y-4">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-card p-4 rounded-lg border relative overflow-hidden"
            >
              <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-lg font-bold mt-1">£{item.price.toFixed(2)}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-primary font-medium">
                    {item.discount}
                  </span>
                  <button className="text-destructive">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}