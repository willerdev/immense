"use client";

import { Filter, Search } from 'lucide-react';
import Image from 'next/image';

const categories = [
  'All Items',
  'Phones',
  'Laptops',
  'Tablets',
  'Accessories',
];

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199.00,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=500',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1149.00,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=500',
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    price: 1299.00,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=500',
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 1099.00,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500',
    rating: 4.8,
    reviews: 167,
  },
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Catalog</h1>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-secondary whitespace-nowrap text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="space-y-2">
              <div className="aspect-square relative rounded-xl overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-bold">£{product.price.toFixed(2)}</span>
                <div className="text-xs text-muted-foreground">
                  ★ {product.rating} ({product.reviews})
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}