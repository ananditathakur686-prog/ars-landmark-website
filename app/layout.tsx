import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARS Imperial Landmark",
  description: "Trusted Automobile Retail Group in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black antialiased">
        
        {/* GLOBAL HEADER / NAVBAR */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
            
            {/* Logo Text */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-black tracking-wider text-white">
                ARS <span className="text-blue-500 text-xs font-semibold tracking-normal block md:inline md:ml-1">IMPERIAL LANDMARK</span>
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
              <a href="#" className="transition-colors hover:text-white">Home</a>
              <a href="#about" className="transition-colors hover:text-white">About Us</a>
              <a href="#ventures" className="transition-colors hover:text-white">Our Ventures</a>
              <a href="#contact" className="transition-colors hover:text-white">Contact</a>
            </nav>

            {/* Action Button */}
            <div>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noreferrer"
                className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors"
              >
                Enquire Now
              </a>
            </div>

          </div>
        </header>

        {/* Main Content Area */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}