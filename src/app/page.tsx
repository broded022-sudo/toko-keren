"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Sepatu Broded Original", price: 350000, img: "👟" },
  { id: 2, name: "Jaket Streetwear Keren", price: 275000, img: "🧥" },
  { id: 3, name: "Kaos Oversize Lipaatt", price: 129000, img: "👕" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (p: any) => {
    setCart([...cart, p]);
    alert(`${p.name} masuk keranjang!`);
  };

  const checkoutWA = () => {
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    const list = cart.map(p => `- ${p.name} Rp${p.price.toLocaleString()}`).join('%0A');
    const msg = `Halo Broded! Mau order:%0A${list}%0A%0ATotal: Rp${total.toLocaleString()}%0A%0Atoko-keren.vercel.app`;
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-black p-6 max-w-5xl mx-auto">
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="font-black text-xl">TOKO BRODED</h1>
        <button onClick={checkoutWA} className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Keranjang ({cart.length})
        </button>
      </header>

      <div className="text-center py-16">
        <h2 className="text-5xl font-black leading-tight">Website Toko Online Broded<br/>Omzet Naik 10x Lipaatt</h2>
        <p className="text-gray-500 mt-4">Klik produk, masuk keranjang, langsung checkout WA!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border rounded-2xl p-6 hover:shadow-xl transition">
            <div className="text-6xl mb-4">{p.img}</div>
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-gray-500 mb-4">Rp {p.price.toLocaleString()}</p>
            <button onClick={() => addToCart(p)} className="w-full bg-black text-white py-3 rounded-full font-bold">+ Keranjang</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-full flex gap-4 items-center shadow-2xl">
          <span>{cart.length} barang | Rp {cart.reduce((s,p)=>s+p.price,0).toLocaleString()}</span>
          <button onClick={checkoutWA} className="bg-white text-black px-4 py-2 rounded-full font-bold">Checkout WA</button>
        </div>
      )}
    </main>
  );
}