/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export default function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  if (layout === 'list') {
    return (
      <motion.div 
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row gap-8 bg-white border border-zinc-100 p-6 group hover:border-zinc-300 transition-colors"
      >
        <div className="w-full md:w-64 h-64 shrink-0 overflow-hidden bg-zinc-50 relative">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
             {product.badges?.map(b => (
              <Badge key={b} className="bg-amber-400 text-zinc-950 rounded-none border-none text-[9px] px-2 py-1 font-bold">{b}</Badge>
             ))}
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-between py-2">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight">{product.name}</h3>
                <p className="text-[10px] font-bold text-zinc-400 tracking-wide">{product.category} • {product.brand}</p>
              </div>
              <span className="text-2xl font-mono font-bold">{formatCurrency(product.price)}</span>
            </div>
            <p className="text-zinc-500 text-sm mb-6 max-w-xl">{product.description}</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center text-xs text-zinc-600">
                  <ChevronRight size={14} className="mr-2 text-zinc-900" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild className="rounded-none bg-zinc-900 h-12 px-8 uppercase tracking-widest text-[10px] font-bold">
              <Link to={`/product/${product.id}`}>View Series</Link>
            </Button>
            <Button variant="outline" className="rounded-none border-zinc-200 h-12 px-8 tracking-wider text-[11px] font-bold hover:bg-zinc-50">
              Inquiry
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-zinc-100 flex flex-col group hover:border-zinc-300 transition-colors"
    >
      <div className="aspect-square relative overflow-hidden bg-zinc-50">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-1">
           {product.badges?.map(b => (
             <Badge key={b} className="bg-zinc-950 text-white rounded-none border-none text-[8px] px-2">{b}</Badge>
           ))}
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <Button asChild variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-[10px] font-bold">
             <Link to={`/product/${product.id}`}>Quick View</Link>
           </Button>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-display font-bold tracking-tight">{product.name}</h3>
            <p className="text-[10px] font-bold text-zinc-400 tracking-wide">{product.category} • {product.brand}</p>
          </div>
          <span className="text-lg font-mono font-bold">{formatCurrency(product.price)}</span>
        </div>
        <div className="flex-grow"></div>
        <Button asChild className="w-full rounded-none bg-zinc-900 h-10 mt-6 tracking-wider text-[11px] font-bold">
          <Link to={`/product/${product.id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
}
