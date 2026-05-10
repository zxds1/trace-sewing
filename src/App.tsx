/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

// Lazy loading or direct imports for pages
// For now direct imports for stability
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import OrderTracking from './pages/OrderTracking';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-zinc-950 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        
        {/* Mobile Bottom Nav (Quick Actions) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 z-50 flex items-center justify-around py-2 px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
           <a href="/" className="flex flex-col items-center p-2 text-zinc-950">
             <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
           </a>
           <a href="/catalog" className="flex flex-col items-center p-2 text-zinc-500">
             <span className="text-[10px] font-bold uppercase tracking-tighter">Shop</span>
           </a>
           <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 text-white p-3 rounded-full -mt-8 shadow-lg border-4 border-white">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           </a>
           <a href="/services" className="flex flex-col items-center p-2 text-zinc-500">
             <span className="text-[10px] font-bold uppercase tracking-tighter">Fix</span>
           </a>
           <a href="/contact" className="flex flex-col items-center p-2 text-zinc-500">
             <span className="text-[10px] font-bold uppercase tracking-tighter">Help</span>
           </a>
        </div>
      </div>
    </Router>
  );
}
