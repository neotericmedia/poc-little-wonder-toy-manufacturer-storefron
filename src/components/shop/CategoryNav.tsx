import React from 'react';

interface CategoryNavProps {
  selected: string;
  onSelect: (cat: string) => void;
}

export function CategoryNav({ selected, onSelect }: CategoryNavProps) {
  const categories = [
    { id: 'all', label: 'All Toys' },
    { id: 'figures', label: 'Action Figures' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'building', label: 'Building Sets' },
    { id: 'plushies', label: 'Plushies' },
  ];

  return (
    <nav className="category-nav">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${selected === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
