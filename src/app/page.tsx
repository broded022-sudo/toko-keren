"use client";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Pisau Brownis Putih", cat: "PISAU", icon: "🔪", vars: [{label:"1 Pack (100 pcs)", price:7000}, {label:"1 Dus (20 pack)", price:135000}] },
  { id: 2, name: "Pisau Brownis Bening", cat: "PISAU", icon: "🔪", vars: [{label:"1 Pack", price:7000}, {label:"1 Dus", price:135000}] },
  { id: 3, name: "Pisau Kue Tart", cat: "PISAU", icon: "🎂", vars: [{label:"1 Pack", price:8000}, {label:"1 Dus", price:150000}] },
  { id: 4, name: "Hanger Warna", cat: "HANGER", icon: "👚", vars: [{label:"1 Lusin", price:15000}] },
  { id: 5, name: "Hanger Hitam", cat: "HANGER", icon: "🖤", vars: [{label:"1 Lusin", price:14000}] },
  { id: 6, name: "Hanger Anak", cat: "HANGER", icon: "👶", vars: [{label:"1 Lusin", price:12000}] },
  { id: 7, name: "Hanger Stainless", cat: "HANGER", icon: "✨", vars: [{label:"1 Pack @10 pcs", price:25000}] },
  { id: 8, name: "Baskom 20 Warna", cat: "BASKOM", icon: "🥣", vars: [{label:"6 Pcs", price:30000}, {label:"12 Pcs", price:55000}] },
  { id: 9, name: "Baskom 16 Warna", cat: "BASKOM", icon: "🥣", vars: [{label:"6 Pcs", price:25000}, {label:"12 Pcs", price:45000}] },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [filter, setFilter] = useState("SEMUA");
  const total = cart.reduce((s, i) => s + i.price, 0);

  const addToCart = (name:string, variant:any) => setCart([...cart, {name, ...variant}]);
  const clearCart = () => setCart([]);

  const checkoutWA = () => {
    if(cart.length===0) return alert("Keranjang masih kosong bro!");
    const list = cart.map(c => `- ${c.name} ${c.label} Rp${c.price.toLocaleString()}`).join('%0A');
    const msg = `Halo Bos Grosir Pakuhaji!%0AMau order:%0A${list}%0A%0ATotal: Rp${total.toLocaleString()}%0A%0ALokasi: %0A%0Atoko-keren.vercel.app`;
    window.open(`https://wa.me/6283877777280?text=${msg}`, '_blank');
  };

  const shareToWA = () => {
    const msg = `🔥 GROSIR TERMURAH PAKUHAJI 🔥%0A%0APisau Brownis 7rb/pack, Hanger mulai 12rb/lusin, Baskom warna-warni!%0A%0ACek Katalog Lengkap & Order Langsung WA di sini:%0Atoko-keren.vercel.app%0A%0ABISA COD & GROSIR!`;
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  const filtered = filter === "SEMUA" ? allProducts : allProducts.filter(p => p.cat === filter);

  return (
    <main className="min-h-screen bg-[#FF8A00] pb-40">
      {/* HEADER */}
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div>
          <b className="text-sm tracking-widest">GROSIR PAKUHAJI</b>
          <div className="text-[10px] opacity-60">Banten • COD • Grosir</div>
        </div>
        <div className="bg-white text-black px-3 py-1.5 rounded-full text-xs font-black">Cart {cart.length}</div>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        {/* HERO VIRAL */}
        <div className="text-white py-8">
          <div className="bg-black inline-block px-3 py-1 rounded-full text-xs font-bold mb-3">📦 READY STOK • BISA COD HARI INI</div>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.9]">PISAU<br/>HANGER<br/>BASKOM<br/><span className="text-black bg-white px-2">TERMURAH</span></h1>
          <p className="mt-4 text-white/80 text-sm">Grosir asli Pakuhaji. Harga kulakan, kualitas premium. Terlaris di Shopee!</p>
          <div className="grid grid-cols-3 gap-2 mt-6 text-center">
            <div className="bg-white text-black p-3 rounded-2xl"><div className="font-black">10RB+</div><div className="text-[10px]">Terjual</div></div>
            <div className="bg-white text-black p-3 rounded-2xl"><div className="font-black">4.9★</div><div className="text-[10px]">Rating</div></div>
            <div className="bg-white text-black p-3 rounded-2xl"><div className="font-black">COD</div><div className="text-[10px]">Bisa</div></div>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex gap-2 overflow-auto pb-4 scrollbar-hide">
          {["SEMUA","PISAU","HANGER","BASKOM"].map(c => (
            <button key={c} onClick={()=>setFilter(c)} className={`whitespace-nowrap px-5 py-2.5 rounded-full font-black text-sm transition ${filter===c ? 'bg-white text-black scale-105' : 'bg-black text-white'}`}>{c}</button>
          ))}
        </div>

        {/* PRODUK GRID - 1 KOLOM DI HP BIAR GEDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-[24px] p-5 shadow-lg">
              <div className="flex justify-between items-start">
                <div className="text-4xl">{p.icon}</div>
                <div className="text-[10px] bg-black text-white px-2 py-1 rounded-full">{p.cat}</div>
              </div>
              <h3 className="font-black text-lg mt-3">{p.name}</h3>
              <div className="mt-3 space-y-2.5">
                {p.vars.map((v:any, i:number) => (
                  <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl">
                    <div><div className="text-sm font-bold">{v.label}</div><div className="text-[#FF8A00] font-black">Rp {v.price.toLocaleString()}</div></div>
                    <button onClick={()=>addToCart(p.name, v)} className="bg-black text-white w-10 h-10 rounded-full font-black text-xl">+</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SHARE */}
        <div className="bg-black text-white rounded-[24px] p-6 mt-8 text-center">
          <h3 className="font-black text-xl">MAU BANJIR ORDER?</h3>
          <p className="text-sm opacity-70 mt-1">Share katalog ini ke Status WA lu sekarang!</p>
          <button onClick={shareToWA} className="w-full bg-green-500 text-white py-4 rounded-full font-black mt-4">🟢 SHARE KE STATUS WA</button>
        </div>
      </div>

      {/* BOTTOM CART - KHUSUS HP */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:max-w-md md:left-1/2 md:-translate-x-1/2 md:bottom-4 md:rounded-[20px] md:shadow-2xl z-50">
        {cart.length === 0 ? (
          <div className="flex justify-between items-center"><span className="text-sm text-gray-500">Keranjang kosong</span><span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Pilih produk dulu</span></div>
        ) : (
          <>
            <div className="flex justify-between text-xs mb-2"><span>{cart.length} item</span><button onClick={clearCart} className="text-red-500">Hapus</button></div>
            <div className="flex justify-between items-center">
              <div><div className="text-xs text-gray-500">Total</div><div className="font-black text-lg">Rp {total.toLocaleString()}</div></div>
              <button onClick={checkoutWA} className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-black">ORDER WA</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}