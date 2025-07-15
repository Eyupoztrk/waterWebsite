import { motion } from 'framer-motion';
import { Home, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const options = [
  {
    key: 'adres',
    title: 'Adres Teslimatı',
    desc: 'Siparişiniz adresinize hızlı ve güvenli şekilde teslim edilir.',
    icon: <Home size={40} className="text-primary mb-2" />,
  },
  {
    key: 'gelin',
    title: 'Gelin, Alın',
    desc: 'Dilerseniz şubemizden suyunuzu kendiniz teslim alabilirsiniz.',
    icon: <ShoppingBag size={40} className="text-primary mb-2" />,
  },
];

export default function DeliveryOptionsSection() {
  const [active, setActive] = useState('adres');
  return (
    <section className="py-16 bg-aqua" id="delivery">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Teslimat Seçenekleri
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {options.map(opt => (
            <motion.div
              key={opt.key}
              className={`flex-1 bg-white rounded-xl shadow-lg p-8 cursor-pointer border-2 transition-all ${active === opt.key ? 'border-primary scale-105' : 'border-transparent'}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(opt.key)}
            >
              <div className="flex flex-col items-center">
                {opt.icon}
                <h3 className="text-xl font-bold mb-2 text-primary font-sans">{opt.title}</h3>
                <p className="text-darkBlue text-center font-sans">{opt.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 