import { motion } from 'framer-motion';

const brands = [
  { name: 'Çobanpınar', img: '/images/cobanpinar.png' },
  { name: 'Hamidiye', img: '/images/hamidiye.png' },
  { name: 'Abant', img: '/images/abant.png' },
  { name: 'Taşkesti', img: '/images/taskesti.png' },
  { name: 'Aroma', img: '/images/aroma.png' },
  { name: 'Gürpınar', img: '/images/gurpinar.png' },
];

export default function BrandsSection() {
  return (
    <section id="brands">
      <h2>Markalarımız</h2>
      <div className="brands-grid">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.name}>
            <img src={brand.img} alt={brand.name} className="brand-img" />
            <span className="brand-label">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 