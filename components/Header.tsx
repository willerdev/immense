import { MapPin, Bell } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
            Im
          </div>
          <span className="font-bold text-lg">Immense</span>
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">Delivery address</p>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <p className="font-medium">92 High Street, London</p>
          </div>
        </div>
      </div>
      <Link
        href="/notifications"
        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center relative"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
          3
        </span>
      </Link>
    </header>
  );
}