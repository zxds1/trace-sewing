/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Users, Factory, Award, ChevronRight } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=2000" 
            alt="The Heritage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           />
        </div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
           >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6 block">Established 1974</span>
              <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white leading-none mb-8">BORN FROM <br /> PRECISION</h1>
           </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <motion.div {...fadeInUp} className="space-y-8">
                <h2 className="text-3xl font-display font-bold tracking-tight">The Trace Standard</h2>
                <p className="text-zinc-600 leading-relaxed text-lg italic">"We don't just sell machines. We engineer specialized production ecosystems that empower fashion designers and manufacturers to scale without compromise."</p>
                <div className="space-y-4 text-sm text-zinc-500 leading-loose">
                   <p>For five decades, TRACE SEWING has stood at the intersection of artisanal craft and industrial automation. What started as a small maintenance workshop in the heart of the textile district has evolved into a global leader in high-speed sewing technology.</p>
                   <p>Our mission is simple: to provide the most reliable, precise, and energy-efficient machinery to those who build the world's apparel. We believe that every stitch matters, and every machine we deploy is a testament to that belief.</p>
                </div>
             </motion.div>
             <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
                <div className="aspect-[4/5] bg-zinc-50 overflow-hidden border border-zinc-100">
                   <img 
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" 
                    alt="Precision Engineering" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-zinc-950 p-12 hidden md:block">
                   <span className="text-6xl font-display font-bold text-white tracking-tighter italic">50Y</span>
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2">Continuous Innovation</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Numbers */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
               <div className="space-y-2">
                  <span className="text-4xl md:text-5xl font-mono font-bold tracking-tighter">140k+</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Machines Deployed</p>
               </div>
               <div className="space-y-2">
                  <span className="text-4xl md:text-5xl font-mono font-bold tracking-tighter">12.2k</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Certified Workshops</p>
               </div>
               <div className="space-y-2">
                  <span className="text-4xl md:text-5xl font-mono font-bold tracking-tighter">99.8%</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Precision Uptime</p>
               </div>
               <div className="space-y-2">
                  <span className="text-4xl md:text-5xl font-mono font-bold tracking-tighter">0.05</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">mm Stitch Accuracy</p>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200">
                  <Target size={20} className="text-zinc-950" />
                </div>
                           <h4 className="text-xl font-display font-bold">Future-Focused</h4>
                <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-tight">We invest 30% of our annual revenue into R&D, focusing on smart-connectivity and AI-assisted sewing patterns.</p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200">
                  <Factory size={20} className="text-zinc-950" />
                </div>
                           <h4 className="text-xl font-display font-bold">Bespoke Setup</h4>
                <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-tight">Every business is different. We offer tailor-made toolsets and workflow consulting for production scaling.</p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200">
                  <Award size={20} className="text-zinc-950" />
                </div>
                           <h4 className="text-xl font-display font-bold">Elite Service</h4>
                <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-tight">Access to the Trace Masterclass and 24/7 technical priority lines comes standard with every industrial unit.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
