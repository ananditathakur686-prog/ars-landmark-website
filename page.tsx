 import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section>
        <div>
          <h1>Welcome to ARS Imperial Landmark</h1>
          <p>Building on a 29-year legacy to deliver exceptional mobility solutions across two-wheeler, four-wheeler, and commercial segments.</p>
        </div>
      </section>

      {/* 2. MAP / IFRAME SECTION */}
      <div className="w-full mt-8 overflow-hidden rounded-2xl shadow-xl border border-slate-200">
        <iframe
          src="https://google.com"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 3. FOOTER & CONTACT INFO */}
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
            <p className="text-sm mb-1"><strong>Phone/WhatsApp:</strong> 6262112212</p>
            <p className="text-sm mb-1"><strong>Timings:</strong> 10:00 AM - 07:00 PM</p>
            <p className="text-sm mt-3"><strong>Location:</strong> ATTIKKA HOUSING (ARS ROTOCORP), Pillar number 98, Main Road, Bhogal, Noida, UP - 201301</p>
          </div>
        </div>

        <div className="text-center text-xs text-slate-600 mt-10 pt-6 border-t border-slate-800/60">
          &copy; {new Date().getFullYear()} ARS Imperial Landmark. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
