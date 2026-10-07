"use client";
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      // Jab aapka backend Render par live ho jayega, tab localhost ko live link se badal denge
      const response = await fetch('http://localhost:5000/api/enquiries/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Thank you! Enquiry saved successfully! 🎉');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again ❌');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Server connection failed ❌');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center my-12">
        <span className="bg-indigo-600/20 text-indigo-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
          ARS Imperial Landmark
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
          Welcome to ARS Imperial Landmark
        </h1>
        <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
          Delivering trusted mobility solutions and exceptional customer experiences across passenger, commercial, and electric vehicle segments.
        </p>
      </div>

      {/* Business Verticals / attractive Showcase Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {/* Four Wheelers */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition-all overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Four Wheelers Showcase" 
            className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS Global Automotive</h3>
          <p className="text-sm text-slate-400">Premium passenger vehicle segments featuring top automotive brands with world-class retail networks.</p>
        </div>

        {/* Two Wheelers */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition-all overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Two Wheelers Showcase" 
            className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS MotoCorp</h3>
          <p className="text-sm text-slate-400">Leading two-wheeler ventures ranging from high-performance cruisers to eco-friendly advanced EVs.</p>
        </div>

        {/* Commercial Vehicles */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:border-indigo-500/50 transition-all overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Commercial Showcase" 
            className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS Commercial Mobility</h3>
          <p className="text-sm text-slate-400">Heavy-duty transport systems, multi-axle logistics carriers, and sustainable business fleet applications.</p>
        </div>
      </div>

      {/* Contact & Map Section */}
      <div className="max-w-xl mx-auto bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl my-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Request a Quote / Enquiry</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500" 
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500" 
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500" 
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows={3} 
              className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500" 
              placeholder="Which brand or vehicle are you interested in?"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-medium shadow-lg transition-colors">
            Submit Enquiry
          </button>
        </form>

        {/* Real Showroom Google Map Embedding */}
        <div className="w-full mt-8 overflow-hidden rounded-xl shadow-md border border-slate-700">
          <iframe 
            src="https://google.com" 
            width="100%" 
            height="260" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-indigo-400 bg-indigo-950/40 p-2 rounded-lg border border-indigo-900/50">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
