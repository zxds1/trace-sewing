/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCart } from '@/CartContext';
import { PRODUCTS } from '@/constants';
import { formatCurrency } from '@/lib/utils';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalItems } = useCart();

  const cartProducts = items.map(item => ({
    ...item,
    product: PRODUCTS.find(p => p.id === item.productId)!
  })).filter(item => item.product);

  const subtotal = cartProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 text-center">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-8">
           <ShoppingBag size={32} className="text-zinc-300" />
        </div>
        <h1 className="text-3xl font-display font-bold text-zinc-950">Fleet Not Assigned</h1>
        <p className="text-zinc-500 mt-4 max-w-sm">You haven't selected any machinery for your production line yet.</p>
        <Button asChild className="mt-8 bg-zinc-950 rounded-none h-12 px-10 uppercase tracking-widest text-xs font-bold">
          <Link to="/catalog">Browse Catalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
          <div className="w-8 h-[1px] bg-zinc-200"></div>
          <span>Reviewing Production Order ({totalItems} Units)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence>
              {cartProducts.map((item) => (
                <motion.div 
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-zinc-100"
                >
                  <div className="w-full sm:w-32 h-32 bg-zinc-50 border border-zinc-100 shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                         <h3 className="text-xl font-display font-bold tracking-tight">{item.product.name}</h3>
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{item.product.category}</p>
                       </div>
                       <span className="font-mono font-bold">{formatCurrency(item.product.price * item.quantity)}</span>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                       <div className="flex items-center border border-zinc-200 h-10">
                          <button 
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="px-3 hover:bg-zinc-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center font-mono text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="px-3 hover:bg-zinc-50"
                          >
                            <Plus size={14} />
                          </button>
                       </div>
                       <button 
                        onClick={() => removeFromCart(item.productId)}
                        className="text-zinc-400 hover:text-red-600 transition-colors flex items-center space-x-2"
                       >
                         <Trash2 size={16} />
                         <span className="text-[10px] font-bold uppercase tracking-widest">Remove Asset</span>
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
             <div className="bg-zinc-50 p-8 border border-zinc-100 sticky top-24">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8 border-b border-zinc-200 pb-4">Order Summary</h4>
                
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                     <span>Subtotal</span>
                     <span className="font-mono text-zinc-950">{formatCurrency(subtotal)}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                     <span>Deployment Fee</span>
                     <span className="text-zinc-950 uppercase tracking-tighter">Calculated at next step</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                     <span>Maintenance Tax</span>
                     <span className="text-zinc-950 uppercase tracking-tighter">TBD</span>
                   </div>
                   <Separator className="bg-zinc-200" />
                   <div className="flex justify-between text-lg font-bold font-display">
                     <span>Total Estim.</span>
                     <span className="font-mono">{formatCurrency(subtotal)}</span>
                   </div>
                </div>

                <div className="space-y-3">
                   <Button asChild className="w-full bg-zinc-950 text-white rounded-none h-14 uppercase tracking-widest font-bold text-xs group">
                     <Link to="/checkout">
                       Proceed to Checkout <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full border-zinc-200 rounded-none h-14 uppercase tracking-widest font-bold text-[10px]">
                     <Link to="/catalog">Continue Selecting Fleet</Link>
                   </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-200">
                   <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mb-4">Secured by Trace Systems</p>
                   <div className="flex space-x-2">
                      <div className="w-8 h-5 bg-zinc-200 rounded-sm"></div>
                      <div className="w-8 h-5 bg-zinc-200 rounded-sm"></div>
                      <div className="w-8 h-5 bg-zinc-200 rounded-sm"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
