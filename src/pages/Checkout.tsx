/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCart } from '@/CartContext';
import { formatCurrency } from '@/lib/utils';
import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const cartProducts = items.map(item => ({
    ...item,
    product: PRODUCTS.find(p => p.id === item.productId)!
  })).filter(item => item.product);

  const subtotal = cartProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mock processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Deployment Successful", {
        description: "Your machinery order is being processed for dispatch."
      });
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
        <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">No active deployment order</p>
        <Button asChild variant="link" className="mt-4 text-zinc-950 font-bold uppercase text-xs">
          <a href="/catalog">Return to Catalog</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Checkout Form */}
          <div>
             <h1 className="text-3xl font-display font-bold tracking-tighter mb-10 pb-4 border-b border-zinc-200">Deployment Logistics</h1>
             
             <form onSubmit={handleSubmit} className="space-y-10">
                <section className="space-y-6">
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Contact Details</h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                        <Input required className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="Johnathan Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest">Phone Number</label>
                        <Input required className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="+1 (555) 000-0000" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest">Operational Email</label>
                      <Input required type="email" className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="operations@company.com" />
                   </div>
                </section>

                <section className="space-y-6">
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Dispatch Destination</h3>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest">Delivery Address</label>
                      <Input required className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="Building 4, Industrial Ave" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest">City</label>
                        <Input required className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="Fabric City" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest">Postal Code</label>
                        <Input required className="rounded-none border-zinc-200 focus-visible:ring-zinc-950" placeholder="90210" />
                      </div>
                   </div>
                </section>

                <section className="space-y-6">
                   <div className="flex justify-between items-center">
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Payment Authorization</h3>
                     <div className="flex space-x-2">
                        <CreditCard size={14} className="text-zinc-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Secure Protocol</span>
                     </div>
                   </div>
                   <div className="p-6 border border-zinc-200 bg-zinc-50 space-y-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest">Card Credentials</label>
                         <Input className="rounded-none border-zinc-200 bg-white" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input className="rounded-none border-zinc-200 bg-white" placeholder="MM / YY" />
                        <Input className="rounded-none border-zinc-200 bg-white" placeholder="CVC" />
                      </div>
                   </div>
                </section>

                <Button 
                  disabled={isProcessing}
                  type="submit" 
                  className="w-full bg-zinc-950 text-white rounded-none h-16 uppercase tracking-[0.2em] font-bold text-sm"
                >
                  {isProcessing ? 'Verifying Assets...' : 'Authorize Authorization & Deploy'}
                </Button>
             </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:pl-20 border-l border-zinc-100 h-fit sticky top-24">
             <h4 className="text-[10px] font-bold uppercase tracking-widest mb-10 text-zinc-400">Deployment Summary</h4>
             
             <div className="space-y-6 mb-12">
                {cartProducts.map(item => (
                  <div key={item.productId} className="flex space-x-4">
                     <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 shrink-0">
                        <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover grayscale" />
                     </div>
                     <div className="flex-grow flex justify-between items-start">
                        <div className="space-y-1">
                           <h5 className="text-xs font-bold">{item.product.name}</h5>
                           <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-xs font-mono font-bold">{formatCurrency(item.product.price * item.quantity)}</span>
                     </div>
                  </div>
                ))}
             </div>

             <div className="space-y-4 pt-8 border-t border-zinc-100 mb-12">
                <div className="flex justify-between text-xs">
                   <span className="text-zinc-500 uppercase font-bold tracking-widest">Unit Aggregate</span>
                   <span className="font-mono">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs">
                   <span className="text-zinc-500 uppercase font-bold tracking-widest">Dispatch Fee</span>
                   <span className="text-green-600 font-bold uppercase tracking-widest">Free (Industrial Tier)</span>
                </div>
                <div className="flex justify-between text-lg font-bold font-display pt-4">
                   <span>Project Total</span>
                   <span className="font-mono">{formatCurrency(subtotal)}</span>
                </div>
             </div>

             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <ShieldCheck size={20} className="text-zinc-950 shrink-0" />
                   <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold tracking-wide">Standard 5-year commercial warranty applies to all authorized deployments.</p>
                </div>
                <div className="flex items-start space-x-4">
                   <Truck size={20} className="text-zinc-950 shrink-0" />
                   <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold tracking-wide">Real-time dispatch tracking will be sent to your operational email.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
