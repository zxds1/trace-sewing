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

      {/* Cinematic Transition Section: maintains premium tone between hero and catalog */}
      <section className="py-20 bg-gradient-to-b from-[#050505] via-[#060606] to-transparent text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Engineered for Production, Designed for Reliability</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">Our machines reduce downtime, increase throughput, and scale with your business — engineered metal, tested in production.</p>
          <div className="relative w-full max-w-3xl mx-auto h-48 overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-[url('/assets/transition-silhouette.svg')] bg-cover bg-center opacity-40 blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button asChild className="bg-transparent border border-zinc-700 text-white rounded-none h-12 px-8 uppercase tracking-wider font-bold">
                <Link to="/catalog">Explore Certified Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold tracking-tighter mb-2">Specialized Equipment</h2>
              <p className="text-zinc-500 text-sm tracking-wide">Select your industry requirement</p>
            </div>
            <Link to="/catalog" className="text-sm font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((category, index) => (
              <motion.div 
                key={category.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 overflow-hidden cursor-pointer"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-display font-bold text-xl uppercase tracking-tight mb-1">{category.name}</h3>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold font-display">Lifetime Reliability</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">Our machines are engineered for 24/7 industrial loads, featuring forged steel components and high-torque direct drive systems.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold font-display">Energy Efficient</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">Next-generation servo motors reduce power consumption by up to 70% compared to traditional clutch motors without sacrificing speed.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold font-display">On-Site Support</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">Every purchase includes 12 months of on-site maintenance and priority access to our global certified repair workshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel Section */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tighter">The Elite Series</h2>
          <p className="text-zinc-500 text-sm tracking-wide">Current fleet top performers</p>
        </div>
        
        <div className="flex gap-8 px-4 overflow-x-auto no-scrollbar scroll-smooth pb-8 md:px-24">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-zinc-200 group"
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
                    <Badge key={badge} className="bg-zinc-950 text-white rounded-none border-none uppercase text-[8px] px-2">{badge}</Badge>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">{product.name}</h3>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{product.category} • {product.brand}</p>
                  </div>
                  <span className="text-lg font-mono font-bold">{formatCurrency(product.price)}</span>
                </div>
                <div className="space-y-2 mb-8">
                   {product.features.slice(0, 2).map((feat, i) => (
                     <div key={i} className="flex items-center text-xs text-zinc-500">
                        <ChevronRight size={12} className="mr-2 text-zinc-950" />
                        {feat}
                     </div>
                   ))}
                </div>
                <Button asChild className="w-full rounded-none bg-zinc-900 h-12 uppercase tracking-widest text-[10px] font-bold">
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-12 text-center">Global Testimonials</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'Sarah Jenkins', role: 'Design Lead @ Atelier S', quote: 'The TRACE 1000 PRO changed our production speed overnight. The precision on delicate fabrics is unmatched.' },
                { name: 'Marcus Vance', role: 'Operations @ Fabric Bloom', quote: 'Trace Flex Credit allowed us to scale our Berlin hub without the initial capital strain. Exceptional service.' },
                { name: 'Elena Rossi', role: 'Founder @ Rossi Couture', quote: 'Industrial grade with a modern interface. The direct drive systems are incredibly quiet and efficient.' }
              ].map((t, i) => (
                <div key={i} className="space-y-4">
                   <div className="flex text-zinc-950">
                      {[...Array(5)].map((_, x) => <Star key={x} size={10} fill="currentColor" />)}
                   </div>
                   <p className="text-sm italic text-zinc-600 leading-relaxed font-display">"{t.quote}"</p>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest">{t.name}</p>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">{t.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-white py-20 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div className="relative z-10 max-w-xl">
               <h2 className="text-3xl md:text-5xl text-white font-display font-bold tracking-tighter leading-none mb-6 italic uppercase">Need Expert Advice? <br /><span className="text-zinc-500 italic">Chat with a Specialist.</span></h2>
               <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Our technicians are available 24/7 to help you choose the right machinery for your production scale or business model.</p>
            </div>
            <div className="relative z-10">
               <Button className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-none h-16 px-12 uppercase tracking-widest font-bold text-sm shadow-xl shadow-white/5">
                 WhatsApp Inquiry
               </Button>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
