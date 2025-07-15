export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 text-center font-sans">
      <div className="container mx-auto px-4">
        <p className="mb-1">Es & Es Su | Sultangazi, V Caddesi No: 48</p>
        <p className="mb-1">Telefon: +90 545 535 63 58</p>
        <p className="mb-1">Çalışma Saatleri: 08:00 - 22:00</p>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
} 