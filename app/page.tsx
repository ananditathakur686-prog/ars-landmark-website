import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-indigo-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Welcome to
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6">
            ARS Imperial Landmark
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Delivering trusted mobility solutions and exceptional customer experiences through a comprehensive network of 24+ dealerships across North and East India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me" 
              target="_blank" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition"
            >
              Connect on WhatsApp
            </a>
            <a href="#verticals" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition">
              Our Businesses
            </a>
          </div>
        </div>
      </header>

      {/* 2. STATS OVERVIEW */}
      <section className="max-w-6xl mx-auto -mt-10 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 text-center">
          <h3 className="text-3xl font-bold text-indigo-600">24+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase mt-1">Trusted Dealerships</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 text-center">
          <h3 className="text-3xl font-bold text-indigo-600">68+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase mt-1">Outlets Across India</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 text-center">
          <h3 className="text-3xl font-bold text-indigo-600">29+ Years</h3>
          <p className="text-sm text-slate-500 font-medium uppercase mt-1">Industry Legacy</p>
        </div>
      </section>

      {/* 3. ABOUT THE GROUP */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">About Our Group</h2>
        <p className="text-slate-600 leading-relaxed">
          ARS Imperial Landmark was established in 2020, building on a 29-year legacy in the automotive dealership industry through its predecessor, ARS Automotive. Under the leadership of Mr. Sahil Singh (CMD), the business was strategically structured into specialized verticals to streamline operations, strengthen brand partnerships, and expand its footprint.
        </p>
      </section>

      {/* 4. BUSINESS VERTICALS */}
      <section id="verticals" className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Strategic Business Verticals</h2>
            <p className="text-slate-500 mt-2">Powering mobility across multiple distinct domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vertical 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase mb-2 tracking-wide">4-Wheelers</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">ARS Global Automotive</h3>
                <p className="text-sm text-slate-600 mb-4">Leading passenger vehicle brands delivering excellence in the four-wheeler retail segment.</p>
                <div className="border-t pt-3">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">PARTNER BRANDS:</span>
                  <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">Mahindra, Toyota, Kia, Jeep, Maruti Suzuki, Tata Motors, Honda, Hyundai</p>
                </div>
              </div>
            </div>

            {/* Vertical 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase mb-2 tracking-wide">2-Wheelers</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">ARS MotoCorp</h3>
                <p className="text-sm text-slate-600 mb-4">Comprehensive range of premium, performance, and everyday commuter two-wheelers including EV solutions.</p>
                <div className="border-t pt-3">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">PARTNER BRANDS:</span>
                  <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">Komaki, Bajaj, TVS, Hero MotoCorp, KTM, Royal Enfield, Triumph, Vespa, Aprilia</p>
                </div>
              </div>
            </div>

            {/* Vertical 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase mb-2 tracking-wide">Commercial</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">ARS Commercial Mobility</h3>
                <p className="text-sm text-slate-600 mb-4">Heavy-duty transport, trucks, buses, and smart green commercial EV mobility setups.</p>
                <div className="border-t pt-3">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">PARTNER BRANDS:</span>
                  <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">Alti Green, Mahindra Commercial, Tata Motors Commercial, Ashok Leyland</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER & CONTACT INFO */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-3">ARS Imperial Landmark</h4>
            <p className="text-sm max-w-sm leading-relaxed">
              Building on a 29-year legacy to deliver exceptional mobility solutions across two-wheeler, four-wheeler, and commercial segments.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-3">Contact Details</h4>
            <p className="text-sm mb-1"><strong>Phone/WhatsApp:</strong> 6202122112</p>
            <p className="text-sm mb-1"><strong>Timings:</strong> 10:00 AM - 07:00 PM</p>
            <p className="text-sm mt-3"><strong>Location:</strong> KOMAKI Noida (ARS MOTOCORP), Pillar number 99, Dadri Main Rd, Bhangel, Noida, UP - 201301</p>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600 mt-10 pt-6 border-t border-slate-800/60">
          &copy; {new Date().getFullYear()} ARS Imperial Landmark. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
