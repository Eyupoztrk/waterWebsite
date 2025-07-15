import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BottleSizesSection from './components/BottleSizesSection';
import BrandsSection from './components/BrandsSection';
import DeliveryOptionsSection from './components/DeliveryOptionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function PricesSection() {
  const prices = [
    { size: '0.33L', amount: '5 TL' },
    { size: '0.5L', amount: '7 TL' },
    { size: '1.5L', amount: '15 TL' },
    { size: '5L', amount: '35 TL' },
    { size: '19L Damacana', amount: '70 TL' },
  ];
  /*return (
    <section id="prices">
      <h2>Fiyatlar</h2>
      <div className="prices-grid">
        {prices.map(({ size, amount }) => (
          <div className="price-card" key={size}>
            <div className="price-size">{size}</div>
            <div className="price-amount">{amount}</div>
          </div>
        ))}
      </div>
    </section>
  );*/
}

function CampaignsSection() {
 /* return (
    <section id="campaigns">
      <h2>Kampanyalar</h2>
      <div style={{maxWidth:'500px',margin:'0 auto',textAlign:'center'}}>
        <p><b>3 Adet 19L Damacana alana 1 adet 0.5L su hediye!</b></p>
        <p><b>Hafta içi 5L su siparişlerinde %10 indirim!</b></p>
      </div>
    </section>
  );*/
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans bg-white">
      <Header />
      <div style={{height:'64px'}}></div>
      <HeroSection id="hero" />
      <AboutSection />
      <BottleSizesSection />
      <BrandsSection />
      <DeliveryOptionsSection />
      <PricesSection />
      <CampaignsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
