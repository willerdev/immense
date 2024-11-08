import { Search, ChevronRight } from 'lucide-react';
import CategoryList from '@/components/CategoryList';
import FlashSale from '@/components/FlashSale';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="pb-24">
      <Header />
      
      <div className="px-4 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search the entire shop"
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>

        <div className="mt-6 bg-secondary/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span>Delivery is</span>
            <span className="text-primary font-semibold">50% cheaper</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <button className="text-muted-foreground flex items-center">
              See all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <CategoryList />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Flash Sale</h2>
            <button className="text-muted-foreground flex items-center">
              See all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <FlashSale />
        </div>
      </div>
    </div>
  );
}