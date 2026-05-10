/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Settings, Wrench, BookOpen, Truck, Package, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'repair',
      icon: <Wrench size={24} />,
      title: 'Precision Repair',
      desc: 'Certified mechanical restoration for industrial sewists.',
      features: ['Genuine parts sourcing', 'Sensor calibration', 'High-torque optimization']
    },
    {
      id: 'maintenance',
      icon: <Settings size={24} />,
      title: 'Fleet Maintenance',
      desc: 'Scheduled lubrication and structural checks for production uptime.',
      features: ['24h response time', 'On-site specialist visits', 'Fleet longevity reporting']
    },
    {
      id: 'training',
      icon: <BookOpen size={24} />,
      title: 'Masterclass Hub',
      desc: 'Empower your workforce with advanced machinery training.',
      features: ['Digital stitch programming', 'Speed optimization', 'Safety protocols']
    },
    {
       id: 'wholesale',
       icon: <Package size={24} />,
       title: 'Factory Supply',
       desc: 'Bulk machinery dispatch for large-scale textile operations.',
       features: ['Import/Export logistics', 'Factory workflow mapping', 'Tax-exempt wholesale tiers']
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Services Hero */}
      <section className="bg-zinc-950 py-24 text-white overflow-hidden relative">
         <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
               <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 font-display">
                 <div className="w-10 h-[1px] bg-zinc-800"></div>
                 <span>Operational Continuity</span>
               </div>
               <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-8">FIXED. <br /> <span className="text-zinc-600">MAINTAINED.</span> <br /> DEPLOYED.</h1>
               <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-10">We don't just provide the hardware. We ensure your production line never stops. From urgent repairs to global logistics.</p>
               <Button className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-none h-14 px-10 uppercase tracking-widest text-xs font-bold">
                  Book Technical Service
               </Button>
            </div>
         </div>
         {/* Background graphic */}
         <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 hidden lg:block">
            <Settings size={600} className="stroke-[0.5px] animate-spin-slow" />
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
               {services.map((s, i) => (
                 <div key={s.id} className="bg-white p-12 md:p-20 space-y-8 group hover:bg-zinc-50 transition-colors">
                    <div className="w-12 h-12 bg-zinc-950 text-white flex items-center justify-center">
                       {s.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-display font-bold tracking-tighter">{s.title}</h3>
                       <p className="text-zinc-500 text-sm md:text-base max-w-xs">{s.desc}</p>
                    </div>
                    <div className="space-y-2">
                       {s.features.map(f => (
                         <div key={f} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            <ChevronRight size={12} className="mr-2 text-zinc-950" />
                            {f}
                         </div>
                       ))}
                    </div>
                    <Button variant="link" className="p-0 h-auto text-[10px] font-bold uppercase tracking-widest text-zinc-950 underline decoration-2 underline-offset-4">
                       Explore Service Layer
                    </Button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center space-x-6">
                 <ShieldCheck size={48} className="text-zinc-200" />
                 <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">Certified Technicians</h4>
                    <p className="text-xs text-zinc-500 uppercase font-medium tracking-tight">Every service is logged and verified by master machinists.</p>
                 </div>
              </div>
              <div className="flex items-center space-x-6">
                 <Truck size={48} className="text-zinc-200" />
                 <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">Priority Dispatch</h4>
                    <p className="text-xs text-zinc-500 uppercase font-medium tracking-tight">Spare parts sourced globally in under 72 hours.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Workshop Showcase */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-6">
                  <h2 className="text-4xl font-display font-bold tracking-tighter">The Lab</h2>
                  <p className="text-zinc-500 text-sm leading-relaxed">Our main technical laboratory in Berlin and Tokyo features state-of-the-art diagnostic tools. We don't just fix; we optimize for performance peaks.</p>
                  <Button asChild variant="outline" className="rounded-none border-zinc-950 px-8 uppercase text-[10px] font-bold tracking-widest">
                     <Link to="/contact">Schedule Site Visit</Link>
                  </Button>
               </div>
               <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?auto=format&fit=crop&q=80&w=800" alt="Repair 1" className="w-full h-64 object-cover grayscale" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" alt="Repair 2" className="w-full h-64 object-cover grayscale" referrerPolicy="no-referrer" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
