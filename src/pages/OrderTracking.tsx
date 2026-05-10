/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        id: orderId.toUpperCase(),
        status: 'In Transit',
        lastLocation: 'Brussels Logistics Hub',
        estimatedDelivery: 'Oct 14, 2024',
        steps: [
          { status: 'Processed', date: 'Oct 08, 2024, 09:30 AM', location: 'Frankfurt Manufacturing Hub', completed: true },
          { status: 'Shipped', date: 'Oct 09, 2024, 02:45 PM', location: 'Frankfurt Central Station', completed: true },
          { status: 'In Transit', date: 'Oct 11, 2024, 11:15 AM', location: 'Brussels Logistics Hub', completed: false, active: true },
          { status: 'Delivered', date: 'Oct 14, 2024 (Est.)', location: 'Final Destination', completed: false },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="bg-zinc-50 min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Track Order | TRACE SEWING SYSTEMS</title>
      </Helmet>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4">
                <div className="w-6 h-[1px] bg-zinc-300"></div>
                <span>Logistic Intelligence</span>
                <div className="w-6 h-[1px] bg-zinc-300"></div>
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tighter">Order Tracking</h1>
            <p className="text-zinc-500 mt-4 text-sm uppercase tracking-widest font-bold">Monitor your asset deployment in real-time</p>
        </div>

        <Card className="rounded-none border-zinc-200 shadow-none mb-12">
          <CardHeader>
            <CardTitle className="text-xs uppercase font-bold tracking-widest">Global Fleet Search</CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold tracking-tight">Enter your order ID or tracking number</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex space-x-2">
              <Input 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Ex: TR-984210X" 
                className="rounded-none border-zinc-200 focus-visible:ring-zinc-950 uppercase"
              />
              <Button type="submit" disabled={isSearching} className="rounded-none bg-zinc-950 px-8 uppercase text-[10px] font-bold tracking-widest">
                {isSearching ? 'Synchronizing...' : 'Search Fleet'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
          {trackingData && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-white p-6 border border-zinc-200">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-xs font-bold font-display">{trackingData.status}</p>
                 </div>
                 <div className="bg-white p-6 border border-zinc-200">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Last Update</p>
                    <p className="text-xs font-bold font-display">{trackingData.lastLocation}</p>
                 </div>
                 <div className="bg-white p-6 border border-zinc-200">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Est. Delivery</p>
                    <p className="text-xs font-bold font-display text-green-600">{trackingData.estimatedDelivery}</p>
                 </div>
              </div>

              <div className="bg-white p-8 border border-zinc-200">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Asset Journey Log</h3>
                <div className="space-y-0 relative">
                    <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-zinc-100 italic" />
                    
                    {trackingData.steps.map((step: any, i: number) => (
                      <div key={i} className="relative pl-10 pb-10 last:pb-0">
                         <div className={cn(
                           "absolute left-0 top-1 w-4 h-4 rounded-full border-4 flex items-center justify-center",
                           step.completed ? "bg-zinc-950 border-zinc-950" : 
                           step.active ? "bg-white border-zinc-950 animate-pulse" : "bg-white border-zinc-100"
                         )}>
                            {step.completed && <CheckCircle2 size={8} className="text-white" />}
                         </div>
                         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                             <div>
                                  <p className={cn("text-xs font-bold font-display", step.active || step.completed ? "text-zinc-950" : "text-zinc-300")}>
                                   {step.status}
                                </p>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">{step.location}</p>
                             </div>
                             <p className="text-[10px] font-mono text-zinc-400 md:text-right">{step.date}</p>
                         </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex justify-center pt-8">
                 <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center">
                       <Package size={24} className="text-zinc-950 mb-2" />
                       <span className="text-[8px] font-bold uppercase">Packaged</span>
                    </div>
                    <div className="w-12 h-[1px] bg-zinc-200" />
                    <div className="flex flex-col items-center">
                       <Truck size={24} className="text-zinc-950 mb-2" />
                       <span className="text-[8px] font-bold uppercase">In Transit</span>
                    </div>
                    <div className="w-12 h-[1px] bg-zinc-200 italic" />
                    <div className="flex flex-col items-center opacity-20">
                       <MapPin size={24} className="text-zinc-950 mb-2" />
                       <span className="text-[8px] font-bold uppercase">Destination</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 p-8 border border-dashed border-zinc-300 text-center">
            <Clock size={24} className="mx-auto mb-4 text-zinc-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Dispatch Notification</h4>
            <p className="text-[10px] text-zinc-400 mt-2 uppercase tracking-tight">Orders typically enter the synchronization cycle within 24 hours of verification.</p>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
