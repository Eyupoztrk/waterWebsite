import { motion } from 'framer-motion';

const sizes = [
  { size: '0.33L', img: '/images/0.33.png' },
  { size: '0.5L', img: '/images/0.5.png' },
  { size: '1.5L', img: '/images/1.5.png' },
  { size: '5L', img: '/images/5.png' },
  { size: '19L', img: '/images/19.png' },
];

export default function BottleSizesSection() {
  return (
    <section className="py-20 bg-softBlue" id="sizes">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Şişe Boyutları
        </motion.h2>
        <div className="sizes-row">
          {sizes.map(({ size, img }) => (
            <div className="size-inline" key={size}>
              <img src={img} alt={size + ' şişe'} className="size-img" />
              <span className="size-label">{size}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 