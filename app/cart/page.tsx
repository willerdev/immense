"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const cartItems = [
  {
    id: 1,
    name: 'Nintendo Switch, Gray',
    price: 169.00,
    quantity: 1,
    image: '/switch.jpg',
  },
  {
    id: 2,
    name: 'The Legend of Zelda: Tears of the Kingdom',
    price: 39.00,
    quantity: 1,
    image: '/zelda.jpg',
  },
];

export default function CartPage() {
  const router = useRouter();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="p-4 flex items-center border-b">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-card p-4 rounded-lg border"
            >
              <div className="relative w-24 h-24 bg-secondary rounded-lg overflow-hidden">
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
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-destructive">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card p-4 rounded-lg border space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>£{shipping.toFixed(2)}</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>£{total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => router.push('/checkout')}
            className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-3 font-medium"
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
    </div>
  );
}