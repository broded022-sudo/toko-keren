export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="flex justify-between p-6 border-b max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">TOKO KEREN</h1>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Hubungi</button>
      </nav>

      <section className="p-10 md:p-24 text-center max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Website Toko Online Broded<br/> Yang Bikin Omzet Naik 10x Lipaatt
        </h2>
        <p className="mt-6 text-gray-500">Dibuat dengan Next.js - Cepat, Modern, SEO Friendly</p>
        <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800">
          Lihat Demo
        </button>

        {/* BAGIAN BARU BIAR LAKU */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="border rounded-2xl p-6">
            <h3 className="font-bold">⚡️ Super Cepat</h3>
            <p className="text-sm text-gray-500 mt-2">Loading 1 detik, Google suka, pembeli betah.</p>
          </div>
          <div className="border rounded-2xl p-6 bg-black text-white">
            <h3 className="font-bold">📱 Siap Jualan di HP</h3>
            <p className="text-sm text-zinc-400 mt-2">Tampilan otomatis rapi di HP & Laptop.</p>
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="font-bold">💸 Checkout Mudah</h3>
            <p className="text-sm text-gray-500 mt-2">Terhubung WhatsApp & Midtrans.</p>
          </div>
        </div>
      </section>
    </main>
  )
}