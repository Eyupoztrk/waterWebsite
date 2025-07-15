import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">İletişim</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <div>Adres</div>
          <div className="contact-info">Sultangazi, V Caddesi No: 48</div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📞</span>
          <div>Telefon</div>
          <div className="contact-info"><a href="tel:+905455356358" style={{color:'#0077cc',textDecoration:'none'}}>+90 545 535 63 58</a></div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">💬</span>
          <div>WhatsApp</div>
          <div className="contact-info"><a href="https://wa.me/905455356358" target="_blank" rel="noopener noreferrer" style={{color:'#25d366',textDecoration:'none'}}>Sipariş Ver</a></div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps?q=Sultangazi+V+Caddesi+No+48&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
} 