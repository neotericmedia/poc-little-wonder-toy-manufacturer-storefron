import React, { useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: string;
  ages: string;
  rating: string;
  reviews: string;
  image: string;
  badge: string;
}

export function Bestsellers() {
  const products: Product[] = [
    {
      id: '1',
      title: 'The rainbow stacker',
      price: '$32.00',
      ages: 'Ages 1–3',
      rating: '★',
      reviews: '4.9 (128)',
      image: '/figma-assets/79adb34056fcbe4c97df3c83d792b69bc50f114b.jpg',
      badge: 'BESTSELLER',
    },
    {
      id: '2',
      title: 'Benny the bear',
      price: '$28.00',
      ages: 'Ages 0+',
      rating: '★',
      reviews: '4.9 (96)',
      image: '/figma-assets/c573d1a3921cd5b88043b1313f59c951cb195d59.jpg',
      badge: 'A LITTLE FAVORITE',
    },
    {
      id: '3',
      title: 'Little city cruiser',
      price: '$24.00',
      ages: 'Ages 2–4',
      rating: '★',
      reviews: '4.8 (74)',
      image: '/figma-assets/2d74fcd15c180e93af210ca874651e94308cee34.jpg',
      badge: 'READY, SET, PLAY',
    },
    {
      id: '4',
      title: 'Build a little world',
      price: '$42.00',
      ages: 'Ages 3–6',
      rating: '★',
      reviews: '4.9 (112)',
      image: '/figma-assets/472d0d28cf61e08d1861594389166b23ef9cf80e.jpg',
      badge: 'ENDLESS POSSIBILITIES',
    },
  ];

  const [filters] = useState(['Bestsellers', 'New arrivals', 'Wooden wonders', 'Cuddly friends', 'Make & create']);
  const [activeFilter] = useState('Bestsellers');

  return (
    <section className="bestsellers">
      <div className="bestsellers-header">
        <div>
          <span className="section-label">THE GOOD STUFF</span>
          <h2>Little toys. Big favorites.</h2>
        </div>
        <a href="#">Shop all toys →</a>
      </div>
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${filter === activeFilter ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="product-shelf">
        {products.map((product) => (
          <div key={product.id} className="toy-card">
            <div className="toy-photo">
              <img src={product.image} alt={product.title} />
              <span className="product-badge">{product.badge}</span>
              <button className="save-btn" aria-label="Save">
                ♡
              </button>
            </div>
            <div className="toy-details">
              <div className="product-meta">
                <span>{product.ages}</span>
                <span>{product.rating} {product.reviews}</span>
              </div>
              <h3>{product.title}</h3>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button className="add-btn" aria-label="Add to bag">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}