import { motion } from 'framer-motion';

const brands = [
  { name: 'Çobanpınar', img: '/src/assets/images/cobanpinar.png' },
  { name: 'Hamidiye', img: '/src/assets/images/hamidiye.png' },
  { name: 'Abant', img: '/src/assets/images/abant.png' },
  { name: 'Taşkesti', img: '/src/assets/images/taskesti.png' },
  { name: 'Aroma', img: '/src/assets/images/aroma.png' },
  { name: 'Gürpınar', img: '/src/assets/images/gurpinar.png' },
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