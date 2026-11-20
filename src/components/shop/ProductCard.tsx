import React from 'react';

interface ProductCardProps {
  product: { id: string; title: string; price: number; image: string };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="btn-primary">View Details</button>
    </div>
  );
}
