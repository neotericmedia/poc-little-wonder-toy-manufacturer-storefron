import React from 'react';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  // Stub: mock products per category
  const mockProducts = [
    { id: '1', title: 'Rainbow Dragon', price: 29.99, image: 'https://via.placeholder.com/200?text=Dragon', category: 'figures' },
    { id: '2', title: 'Speedy Racer', price: 24.99, image: 'https://via.placeholder.com/200?text=Racer', category: 'vehicles' },
  ];

  const filtered = category === 'all' ? mockProducts : mockProducts.filter((p) => p.category === category);

  return (
    <div className="product-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
