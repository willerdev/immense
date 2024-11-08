import Image from 'next/image';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro 128GB Natural Titanium',
    price: 699.00,
    originalPrice: 799.00,
    image: '/iphone15pro.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy Buds Pro True Wireless Black',
    price: 69.00,
    originalPrice: 89.00,
    image: '/galaxybuds.jpg',
  },
];

export default function FlashSale() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="relative">
          <div className="aspect-square relative mb-2 bg-secondary rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-semibold">£{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}