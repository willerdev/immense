"use client";

import { useState } from 'react';
import { 
  ChevronLeft, Heart, Share2, ShoppingCart, 
  Star, Truck, Shield, RotateCcw, ChevronRight 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const product = {
  id: 1,
  name: 'iPhone 15 Pro Max',
  price: 1199.00,
  rating: 4.8,
  reviews: 128,
  description: 'The iPhone 15 Pro Max features a stunning display, powerful A17 Pro chip, and an advanced camera system with a 5x telephoto lens.',
  images: [
    'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=500',
    'https://images.unsplash.com/photo-1697644371824-41f1e7e9a354?q=80&w=500',
    'https://images.unsplash.com/photo-1697644371648-40acd8e8b3a5?q=80&w=500',
  ],
  features: [
    'A17 Pro chip',
    'Pro camera system',
    '5x telephoto lens',
    'Titanium design',
  ],
};

const benefits = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'For orders over £999',
  },
  {
    icon: Shield,
    title: '2 Year Warranty',
    description: 'Full coverage',
  },
  {
    icon: RotateCcw,
    title: '30 Days Return',
    description: 'Money back guarantee',
  },
];

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="p-4 flex items-center justify-between">
        <Link href="/catalog" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="space-y-6">
        <div className="relative aspect-square bg-secondary">
          <Image
            src={product.images[currentImage]}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage ? 'bg-primary' : 'bg-secondary'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
            onClick={() => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
            onClick={() => setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 space-y-4">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-primary">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-2">
            <h2 className="font-semibold">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-2xl font-bold">£{product.price.toFixed(2)}</p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}