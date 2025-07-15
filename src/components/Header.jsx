import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo"><span className="logo-emoji">💧</span>Es & Es Su</div>
        <nav className={`header-nav${open ? ' open' : ''}`}>
          <a href="#hero" onClick={()=>setOpen(false)}>Ana Sayfa</a>
          <a href="#about" onClick={()=>setOpen(false)}>Hakkımızda</a>
          <a href="#sizes" onClick={()=>setOpen(false)}>Şişe Boyutları</a>
          <a href="#brands" onClick={()=>setOpen(false)}>Markalar</a>
          <a href="#delivery" onClick={()=>setOpen(false)}>Teslimat</a>
          <a href="#prices" onClick={()=>setOpen(false)}>Fiyatlar</a>
          <a href="#campaigns" onClick={()=>setOpen(false)}>Kampanyalar</a>
          <a href="#contact" onClick={()=>setOpen(false)}>İletişim</a>
        </nav>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={()=>setOpen(!open)} aria-label="Menüyü Aç/Kapat">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
} 