/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Search, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-6 block">Support Protocol</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-6">CONNECT WITH <br /> THE FLEET</h1>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">Whether you need a custom quote for a factory setup or technical assistance for a single unit, our specialist team is on standby.</p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
           {/* Info Cards */}
           <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white border border-zinc-100 p-8 space-y-4">
                    <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center">
                       <Phone size={18} className="text-zinc-950" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Direct Comms</p>
                    <p className="text-lg font-display font-bold uppercase">+1 (234) 567 890</p>
                 </div>
                 <div className="bg-white border border-zinc-100 p-8 space-y-4">
                    <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center">
                       <Mail size={18} className="text-zinc-950" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Operational Email</p>
                    <p className="text-lg font-display font-bold uppercase underline">fleet@trace.sys</p>
                 </div>
              </div>

              <div className="space-y-8">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 pb-4 border-b border-zinc-100">Global Nexus</h3>
                 <div className="space-y-12">
                     <div className="flex group">
                        <div className="mr-8">
                           <span className="text-4xl font-display font-bold text-zinc-200 group-hover:text-zinc-950 transition-colors">01</span>
                        </div>
                        <div className="space-y-2">
                           <h4 className="font-bold uppercase tracking-tighter text-xl italic">Innovation Hub — Berlin</h4>
                           <p className="text-xs text-zinc-500 leading-relaxed uppercase font-medium">Karl-Marx-Straße 12, Neukölln <br /> 12043 Berlin, Germany</p>
                        </div>
                     </div>
                     <div className="flex group">
                        <div className="mr-8">
                           <span className="text-4xl font-display font-bold text-zinc-200 group-hover:text-zinc-950 transition-colors">02</span>
                        </div>
                        <div className="space-y-2">
                           <h4 className="font-bold uppercase tracking-tighter text-xl italic">Production HQ — Tokyo</h4>
                           <p className="text-xs text-zinc-500 leading-relaxed uppercase font-medium">2-13-1 Nihonbashi, Chuo-ku <br /> Tokyo 103-0027, Japan</p>
                        </div>
                     </div>
                 </div>
              </div>
              
              <div className="aspect-video bg-zinc-100 grayscale overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Trace HQ Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                 />
              </div>
           </div>

           {/* Contact Form */}
           <div>
              <div className="bg-zinc-950 p-12 md:p-16 text-white space-y-10">
                 <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                       <div className="w-4 h-[1px] bg-white"></div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Transmission Portal</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold italic uppercase tracking-tighter">Submit a Specification</h2>
                 </div>

                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                          <Input className="bg-zinc-900 border-zinc-800 rounded-none h-12 text-white focus-visible:ring-zinc-700" placeholder="Required" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Company Identity</label>
                          <Input className="bg-zinc-900 border-zinc-800 rounded-none h-12 text-white focus-visible:ring-zinc-700" placeholder="Optional" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Transmission Subject</label>
                       <select className="w-full bg-zinc-900 border-zinc-800 rounded-none h-12 text-white px-3 outline-none text-xs font-bold uppercase tracking-widest">
                          <option>Unit Inquiry</option>
                          <option>Fleet Wholesale Quote</option>
                          <option>Maintenance Request</option>
                          <option>Technical Partnership</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Specifications / Message</label>
                       <textarea 
                        className="w-full bg-zinc-900 border-zinc-800 rounded-none h-40 text-white p-4 outline-none text-sm focus:ring-1 focus:ring-zinc-700"
                        placeholder="Detailed inquiry..."
                       ></textarea>
                    </div>
                    <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 rounded-none h-16 uppercase tracking-[0.2em] font-bold text-xs group">
                       Initialize Transmission <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                 </form>

                 <div className="pt-8 border-t border-zinc-900 flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                       <MessageSquare size={14} />
                       <span>Avg Response: 2.4 Hours</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
