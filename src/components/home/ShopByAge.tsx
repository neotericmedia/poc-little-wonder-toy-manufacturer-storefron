import React from 'react';

export function ShopByAge() {
  const ageGroups = [
    {
      range: '0–12',
      unit: 'months',
      description: 'Their very first discoveries',
      bgColor: '#f3e3d7',
    },
    {
      range: '1–2',
      unit: 'years',
      description: 'Little steps.\nBig adventures.',
      bgColor: '#e8eddf',
    },
    {
      range: '3–5',
      unit: 'years',
      description: 'Let imagination run wild',
      bgColor: '#f8ebc7',
    },
    {
      range: '6+',
      unit: 'years',
      description: 'Bigger ideas start here',
      bgColor: '#e5e9ef',
    },
  ];

  return (
    <section className="shop-by-age">
      <div className="age-heading">
        <h2>A little something for every stage.</h2>
        <a href="#">Find their kind of play →</a>
      </div>
      <div className="age-grid">
        {ageGroups.map((group, idx) => (
          <div key={idx} className="age-card" style={{ backgroundColor: group.bgColor }}>
            <div className="age-range">
              <span className="age-number">{group.range}</span>
              <span className="age-unit">{group.unit}</span>
            </div>
            <div className="age-info">
              <p>{group.description}</p>
              <a href="#" className="shop-link">Shop now →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}