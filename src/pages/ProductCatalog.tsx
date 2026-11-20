import React, { useState } from 'react';
import { CategoryNav } from '../components/shop/CategoryNav';
import { ProductGrid } from '../components/shop/ProductGrid';
import '../styles/catalog.css';

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <h1>Little Wonder</h1>
        <p>Discover magical toys for every adventure</p>
      </header>
      <div className="catalog-layout">
        <CategoryNav selected={selectedCategory} onSelect={setSelectedCategory} />
        <ProductGrid category={selectedCategory} />
      </div>
    </div>
  );
}
