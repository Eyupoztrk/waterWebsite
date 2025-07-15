import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-darkBlue">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Es & Es Su, Sultangazi V Caddesi No: 48 adresinde hizmet veren, taze ve güvenilir suyu kapınıza kadar getiren bir su dağıtım bayisidir. Farklı boyutlardaki su şişeleriyle hem ev hem iş yerlerine hızlı teslimat sağlıyoruz. Siparişleriniz ister adresinize teslim edilir, ister gelip alabilirsiniz.
        </motion.p>
      </div>
    </section>
  );
} 