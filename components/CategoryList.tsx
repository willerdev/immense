import { Smartphone, Gamepad, Laptop, Camera, Headphones } from 'lucide-react';

const categories = [
  { icon: Smartphone, label: 'Phones' },
  { icon: Gamepad, label: 'Consoles' },
  { icon: Laptop, label: 'Laptops' },
  { icon: Camera, label: 'Cameras' },
  { icon: Headphones, label: 'Audio' },
];

export default function CategoryList() {
  return (
    <div className="flex justify-between overflow-x-auto pb-2 -mx-4 px-4">
      {categories.map(({ icon: Icon, label }) => (
        <button key={label} className="flex flex-col items-center min-w-[72px]">
          <div className="category-icon">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}