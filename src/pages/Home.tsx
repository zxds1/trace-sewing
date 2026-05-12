/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Wrench, Clock, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATEGORIES, PRODUCTS } from '@/constants';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';

import Hero from '@/components/sections/Hero';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="space-y-0">
      <Helmet>
        <title>TRACE Sewing | Industrial Precision Machinery for Modern Business</title>
        <meta name="description" content="Equip your sewing business with premium industrial machinery. We provide high-speed systems, embroidery units, and global technical support." />
      </Helmet>
      
      <Hero />

      {/* JUKI Machines Showcase - Display immediately on page load */}
      <section className="py-24 bg-[#fef3e8] border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-[#00539E]">
                JUKI Sewing Machines
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Premium industrial and professional sewing machines built for precision and reliability.
              </p>
            </div>
            <Link 
              to="/catalog" 
              className="text-sm font-bold uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all decoration-2 underline-offset-4 hover:text-[#00539E] whitespace-nowrap group inline-flex items-center gap-2"
              style={{ textDecorationColor: 'currentColor' }}
            >
              <span>View All Machines</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-sky-900">
                Sewing Machine Spare Parts
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                High-quality replacement parts that fit all major brands
              </p>
            </div>
            <Link 
              to="/catalog" 
              className="text-sm font-bold uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all decoration-2 underline-offset-4 hover:text-sky-600 whitespace-nowrap group inline-flex items-center gap-2"
              style={{ textDecorationColor: 'currentColor' }}
            >
              <span>View All</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    

      {/* Best Sellers Carousel Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tighter text-sky-900">The Elite Series</h2>
          <p className="text-slate-500 text-sm tracking-wide">Current fleet top performers</p>
        </div>
        
        <div className="flex gap-8 px-4 overflow-x-auto no-scrollbar scroll-smooth pb-8 md:px-24">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-sky-200 group shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badges?.map(badge => (
                    <Badge key={badge} className="bg-sky-600 text-white rounded-none border-none uppercase text-[8px] px-2">{badge}</Badge>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display tracking-tight text-slate-800 group-hover:text-sky-700 transition-colors">{product.name}</h3>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{product.category} • {product.brand}</p>
                  </div>
                  <span className="text-lg font-mono font-bold text-sky-700">{formatCurrency(product.price)}</span>
                </div>
                <div className="space-y-2 mb-8">
                   {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-600">
                         <ChevronRight size={12} className="mr-2 text-sky-600" />
                         {feat}
                      </div>
                    ))}
                 </div>
                <Button asChild className="w-full rounded-none bg-sky-600 h-12 uppercase tracking-widest text-[10px] font-bold hover:bg-sky-700 transition-colors">
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-white py-20 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-600 p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div className="relative z-10 max-w-xl">
               <h2 className="text-3xl md:text-5xl text-white font-display font-bold tracking-tighter leading-none mb-6 italic uppercase">Need Expert Advice? <br /><span className="text-sky-100 italic">Chat with a Specialist.</span></h2>
               <p className="text-sky-100 text-sm md:text-base leading-relaxed">Our technicians are available 24/7 to help you choose the right machinery for your production scale or business model.</p>
            </div>
            <div className="relative z-10">
               <Button className="bg-white text-sky-700 hover:bg-sky-50 rounded-none h-16 px-12 uppercase tracking-widest font-bold text-sm shadow-lg">
                 WhatsApp Inquiry
               </Button>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
