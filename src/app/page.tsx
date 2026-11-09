"use client";
import { useState } from "react";

export default function Home() {
  const [qty, setQty] = useState(1);
  const price = 7000;
  const total = qty * price;
  const waNumber = "6283877777280"; // nomor lu

  const checkoutWA = () => {
    const msg = `Halo Kak! Mau order Pisau Brownis Putih:%0A%0A- Produk: Pisau Brownis Putih Isi 100 Pak%0A- Qty: ${qty} pack%0A- Harga: Rp${price.toLocaleString()}/pack%0A- Total: Rp${total.toLocaleString()}%0A%0ABisa COD kan?%0A%0Atoko-keren.vercel.app`;
    window.open(`https://wa.me/${waNumber}?text=${msg}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FF8A00] text-white">
      <div className="max-w-6xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-8 items-center min-h-screen">
        
        {/* KIRI - FOTO */}
        <div className="bg-white rounded-[30px] p-4 shadow-2xl">
          <img src="/pisau.jpg" alt="Pisau Brownis" className="w-full rounded-[20px]" />
        </div>

        {/* KANAN - JUALAN */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">BEST QUALITY PREMIUM</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">TERLARIS 10RB+ TERJUAL</span>
          </div>
          
          <h1 className="text-5xl font-black leading-none">PISAU<br/>BROWNIS<br/>PUTIH</h1>
          <p className="text-3xl font-bold text-yellow-200">ISI 100 PAK</p>
          
          <div className="bg-white text-black rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Harga per pack</span>
              <span className="text-3xl font-black">Rp 7.000</span>
            </div>
            
            <div className="flex justify-between items-center border-t pt-3">
              <span>Jumlah</span>
              <div className="flex gap-3 items-center">
                <button onClick={()=>setQty(Math.max(1,qty-1))} className="w-10 h-10 bg-black text-white rounded-full">-</button>
                <span className="font-bold text-xl w-8 text-center">{qty}</span>
                <button onClick={()=>setQty(qty+1)} className="w-10 h-10 bg-black text-white rounded-full">+</button>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Total</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>

            <button onClick={checkoutWA} className="w-full bg-green-500 text-white py-4 rounded-full font-black text-lg flex justify-center gap-2">
              <span>🟢</span> ORDER VIA WHATSAPP - BISA COD
            </button>
            
            <p className="text-center text-xs text-gray-500">Grosir lebih murah? Chat aja!</p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold">
            <div className="bg-black/20 p-3 rounded-xl">✓ Food Grade</div>
            <div className="bg-black/20 p-3 rounded-xl">✓ Tebal</div>
            <div className="bg-black/20 p-3 rounded-xl">✓ COD</div>
          </div>
        </div>
      </div>
    </main>
  );
}