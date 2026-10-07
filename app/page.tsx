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
      // Live Render URL aane par localhost ko replace kar denge
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12">
      {/* Top Header Section */}
      <div className="max-w-6xl mx-auto flex justify-between items-center border-b border-slate-800 pb-6 mb-12">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-extrabold tracking-wider text-white">ARS <span className="text-indigo-500 text-sm">IMPERIAL LANDMARK</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Our Ventures</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-2 rounded-xl border border-slate-700">
          Enquire Now
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center my-12">
        <span className="bg-indigo-600/20 text-indigo-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
          ARS Imperial Landmark
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 text-white leading-tight">
          Welcome to ARS Imperial Landmark
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mt-6 leading-relaxed">
          Delivering trusted mobility solutions and exceptional customer experiences across passenger, commercial, and electric vehicle segments. Building on a 29-year legacy to deliver exceptional mobility solutions across North and East India.
        </p>
      </div>

      {/* Business Verticals Layout with Premium Combined Photos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {/* Card 1: Four Wheelers */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Four Wheelers Showcase" 
            className="w-full h-48 object-cover rounded-2xl mb-5 group-hover:scale-102 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS Global Automotive</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Premium passenger vehicle segments featuring top automotive brands like Mahindra, Toyota, Kia, Jeep, and Maruti Suzuki with world-class retail networks.</p>
        </div>

        {/* Card 2: Two Wheelers */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Two Wheelers Showcase" 
            className="w-full h-48 object-cover rounded-2xl mb-5 group-hover:scale-102 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS MotoCorp</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Leading two-wheeler ventures ranging from high-performance cruisers like Royal Enfield, KTM, and Triumph to advanced eco-friendly EVs like Komaki.</p>
        </div>

        {/* Card 3: Commercial Vehicles */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
          <img 
            src="https://unsplash.com" 
            alt="Commercial Showcase" 
            className="w-full h-48 object-cover rounded-2xl mb-5 group-hover:scale-102 transition-transform duration-300"
          />
          <h3 className="text-xl font-bold text-white mb-2">ARS Commercial Mobility</h3>
          <p className="text-sm text-slate-400 leading-relaxed">Heavy-duty transport systems, multi-axle logistics carriers, and sustainable business fleet applications featuring Ashok Leyland, Tata, and Mahindra Commercial.</p>
        </div>
      </div>

      {/* Combined Form & Map Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/40 border border-slate-800 p-6 md:p-10 rounded-3xl shadow-2xl my-16">
        
        {/* Left Form Grid Element */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Request a Quote / Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={3} 
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                placeholder="Which vehicle segment or brand are you interested in?"
              />
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition-colors">
              Submit Enquiry
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm font-medium text-indigo-400 bg-indigo-950/30 p-3 rounded-xl border border-indigo-900/40">
              {status}
            </p>
          )}
        </div>

        {/* Right Details Grid Element with Integrated Real Google Map */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Details</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <p><strong>Phone / WhatsApp:</strong> 6202122112</p>
              <p><strong>Timings:</strong> 10:00 AM - 07:00 PM</p>
              <p><strong>Location:</strong> KOMAKI Noida (ARS MOTOCORP), Pillar number 99, Dadri Main Rd, Bhangel, Goyal Colony, Salarpur Khadar, Salarpur, Noida, Uttar Pradesh 201301</p>
            </div>
          </div>

          {/* Step 2: Integrated Live Showroom Google Map Frame */}
          <div className="w-full mt-6 overflow-hidden rounded-2xl shadow-xl border border-slate-800 h-64">
            <iframe
