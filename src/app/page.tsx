"use client";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Pisau Brownis Putih", cat: "PISAU", vars: [{label:"1 Pack (100 pcs)", price:7000}, {label:"1 Dus (Isi 20 pack)", price:135000}] },
  { id: 2, name: "Pisau Brownis Bening", cat: "PISAU", vars: [{label:"1 Pack (100 pcs)", price:7000}, {label:"1 Dus", price:135000}] },
  { id: 3, name: "Pisau Kue Tart", cat: "PISAU", vars: [{label:"1 Pack", price:8000}, {label:"1 Dus", price:150000}] },
  { id: 4, name: "Hanger Warna", cat: "HANGER", vars: [{label:"1 Lusin", price:15000}] },
  { id: 5, name: "Hanger Hitam", cat: "HANGER", vars: [{label:"1 Lusin", price:14000}] },
  { id: 6, name: "Hanger Anak", cat: "HANGER", vars: [{label:"1 Lusin", price:12000}] },
  { id: 7, name: "Hanger Stainless", cat: "HANGER", vars: [{label:"1 Pack @10 pcs", price:25000}] },
  { id: 8, name: "Baskom 20 Warna", cat: "BASKOM", vars: [{label:"6 Pcs", price:30000}, {label:"12 Pcs", price:55000}] },
  { id: 9, name: "Baskom 16 Warna", cat: "BASKOM", vars: [{label:"6 Pcs", price:25000}, {label:"12 Pcs", price:45000}] },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [filter, setFilter] = useState("SEMUA");
  
  const addToCart = (name:string, variant:any) => {
    setCart([...cart, {name, ...variant}]);
  };
  
  const total = cart.reduce((s, i) => s + i.price, 0);
  
  const checkoutWA = () => {
    const list = cart.map(c => `- ${c.name} ${c.label} Rp${c.price.toLocaleString()}`).join('%0A');
    const msg = `Halo Bos! Mau order grosir:%0A${list}%0A%0ATotal: Rp${total.toLocaleString()}%0A%0Atoko-keren.vercel.app`;
    window.open(`https://wa.me/6283877777280?text=${msg}`, '_blank');
  };

  const filtered = filter === "SEMUA" ? allProducts : allProducts.filter(p => p.cat === filter);

  return (
    <main className="min-h-screen bg-[#FF8A00]">
      <header className="bg-black text-white p-4 flex justify-between sticky top-0 z-50">
        <b>GROSIR PAKUHAJI</b>
        <button onClick={checkoutWA} className="bg-white text-black px-4 py-1 rounded-full">Cart ({cart.length}) Rp{total.toLocaleString()}</button>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-white text-4xl font-black py-6">PISAU • HANGER • BASKOM<br/>GROSIR TERMURAH</h1>
        
        <div className="flex gap-2 mb-6">
          {["SEMUA","PISAU","HANGER","BASKOM"].map(c => (
            <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full font-bold ${filter===c ? 'bg-white text-black' : 'bg-black/20 text-white'}`}>{c}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-2xl p-4">
              <div className="text-xs bg-black text-white inline-block px-2 py-1 rounded mb-2">{p.cat}</div>
              <h3 className="font-black text-lg">{p.name}</h3>
              <div className="mt-3 space-y-2">
                {p.vars.map((v:any, i:number) => (
                  <div key={i} className="flex justify-between items-center border p-2 rounded-xl">
                    <div><div className="text-sm font-bold">{v.label}</div><div className="text-orange-600 font-bold">Rp {v.price.toLocaleString()}</div></div>
                    <button onClick={()=>addToCart(p.name, v)} className="bg-black text-white px-3 py-2 rounded-full text-xs">+ Cart</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white p-4 rounded-2xl w-[90%] max-w-md flex justify-between items-center">
          <span>{cart.length} item - Rp {total.toLocaleString()}</span>
          <button onClick={checkoutWA} className="bg-green-500 px-4 py-2 rounded-full font-bold">WA Order</button>
        </div>
      )}
    </main>
  );
}