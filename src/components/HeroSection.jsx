import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Yavaşça hareket eden, koyu, gölgeli, oval ve çok sayıda baloncuklar */}
      <div className="bubble-bg">
        <div className="bubble bubble1" />
        <div className="bubble bubble2" />
        <div className="bubble bubble3" />
        <div className="bubble bubble4" />
        <div className="bubble bubble5" />
        <div className="bubble bubble6" />
        <div className="bubble bubble7" />
        <div className="bubble bubble8" />
        <div className="bubble bubble9" />
        <div className="bubble bubble10" />
        <div className="bubble bubble11" />
        <div className="bubble bubble12" />
        <div className="bubble bubble13" />
        <div className="bubble bubble14" />
        <div className="bubble bubble15" />
        <div className="bubble bubble16" />
        <div className="bubble bubble17" />
        <div className="bubble bubble18" />
        <div className="bubble bubble19" />
        <div className="bubble bubble20" />
      </div>
      {/* Modern, çok katmanlı dalga SVG arka plan */}
      <div className="hero-waves-bg">
        <svg className="hero-wave hero-wave1" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#cceeff" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L0,320Z"/></svg>
        <svg className="hero-wave hero-wave2" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#b3e0ff" fillOpacity="0.7" d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,133.3C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L0,320Z"/></svg>
        <svg className="hero-wave hero-wave3" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#e6f7ff" fillOpacity="0.5" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,154.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L0,320Z"/></svg>
      </div>
      <div className="hero-content">
        <h1 className="hero-title-gradient">Es & Es Su</h1>
        <p className="hero-subtitle-anim">Suyun En Tazesini Kapınıza Getiriyoruz.</p>
        <div className="hero-btns">
          <a href="https://wa.me/905455356358" target="_blank" rel="noopener noreferrer" className="btn btn-anim">Sipariş Ver</a>
          <a href="#about" className="btn btn-anim secondary">Detayları Gör</a>
        </div>
      </div>
    </section>
  );
}

// Animasyonlar için Tailwind'e özel keyframes eklenmeli (tailwind.config.cjs'de) 