/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, LayoutGrid, List, SlidersHorizontal, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CATEGORIES, PRODUCTS } from '@/constants';
import ProductCard from '@/components/catalog/ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !selectedCategory || p.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      
      return matchSearch && matchCategory && matchPrice;
    });
  }, [search, selectedCategory, priceRange]);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Shop Industrial Sewing Machines | TRACE Fleet</title>
        <meta name="description" content="Browse our complete catalog of industrial sewing machines, embroidery systems, and specialized textile equipment." />
      </Helmet>
      {/* Catalog Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-[1px] bg-zinc-950"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Inventory</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Professional Fleet</h1>
              <p className="text-zinc-500 text-sm md:text-base mt-4">Precision-engineered sewing systems for every scale of production. Explore our current inventory of industrial and specialized machinery.</p>
            </div>
            <div className="w-full md:w-auto flex items-center space-x-4">
               <div className="relative flex-grow md:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                 <Input 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="Search models..." 
                   className="pl-10 rounded-none border-zinc-200 focus-visible:ring-zinc-950"
                 />
               </div>
               <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline" 
                className="rounded-none md:hidden"
               >
                 <Filter size={18} />
               </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-10 sticky top-24 self-start">
             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 py-2 border-y border-zinc-100">Categories</h4>
               <div className="space-y-3">
                 <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`block text-sm uppercase tracking-wide transition-colors ${!selectedCategory ? 'font-bold text-zinc-950' : 'text-zinc-500 hover:text-zinc-900'}`}
                 >
                   All Systems
                 </button>
                 {CATEGORIES.map(cat => (
                   <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block text-sm uppercase tracking-wide transition-colors ${selectedCategory === cat.id ? 'font-bold text-zinc-950' : 'text-zinc-500 hover:text-zinc-900'}`}
                   >
                     {cat.name}
                   </button>
                 ))}
               </div>
             </div>

             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 py-2 border-y border-zinc-100">Price Threshold</h4>
               <div className="space-y-6">
                 <div className="flex items-center justify-between text-xs font-mono font-bold">
                   <span>$0</span>
                   <span>$5,000+</span>
                 </div>
                 {/* Simple slider mock or real slider component */}
                 <div className="h-1 bg-zinc-100 relative">
                   <div className="absolute inset-0 bg-zinc-900" style={{ left: '0%', right: '0%' }}></div>
                   <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-zinc-950 cursor-pointer"></div>
                   <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-zinc-950 cursor-pointer"></div>
                 </div>
               </div>
             </div>

             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 py-2 border-y border-zinc-100">Support & Warranty</h4>
               <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-zinc-950" />
                    <span className="text-xs uppercase tracking-tight text-zinc-600">On-Site Setup Inc.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-zinc-950" />
                    <span className="text-xs uppercase tracking-tight text-zinc-600">Certified Refurbished</span>
                  </div>
               </div>
             </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100">
               <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                 Showing {filteredProducts.length} Results
               </div>
               <div className="flex items-center space-x-4">
                  <div className="flex border border-zinc-200">
                    <button 
                      onClick={() => setLayout('grid')}
                      className={`p-2 transition-colors ${layout === 'grid' ? 'bg-zinc-950 text-white' : 'hover:bg-zinc-50'}`}
                    >
                      <LayoutGrid size={16} />
                    </button>
                    <button 
                      onClick={() => setLayout('list')}
                      className={`p-2 transition-colors ${layout === 'list' ? 'bg-zinc-950 text-white' : 'hover:bg-zinc-50'}`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                  <select className="border border-zinc-200 px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-white outline-none">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Latest Arrivals</option>
                  </select>
               </div>
            </div>

            {/* Grid */}
            <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
               <AnimatePresence mode="popLayout">
                 {filteredProducts.map(product => (
                   <div key={product.id}>
                     <ProductCard product={product} layout={layout} />
                   </div>
                 ))}
               </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center border-2 border-dashed border-zinc-100">
                 <h3 className="text-2xl font-display font-bold text-zinc-300">No matches found</h3>
                 <p className="text-zinc-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
                 <Button onClick={() => { setSearch(''); setSelectedCategory(null); }} variant="link" className="mt-4 text-zinc-950 font-bold uppercase text-[10px] tracking-widest">
                   Clear All Filters
                 </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 md:hidden"
            onClick={() => setShowFilters(false)}
          >
            <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="absolute right-0 top-0 bottom-0 w-80 bg-white p-8"
               onClick={e => e.stopPropagation()}
            >
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-display font-bold">Filters</h3>
                  <button onClick={() => setShowFilters(false)}><X size={24} /></button>
               </div>
               
               <ScrollArea className="h-[calc(100vh-160px)] pr-4">
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                         {CATEGORIES.map(cat => (
                           <button 
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={cn(
                              "px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all",
                              selectedCategory === cat.id ? "bg-zinc-950 border-zinc-950 text-white" : "border-zinc-200 text-zinc-500"
                            )}
                           >
                             {cat.name}
                           </button>
                         ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Price Selection</h4>
                      {/* Mobile price sliders would go here */}
                      <p className="text-xs text-zinc-400">All price points shown</p>
                    </div>
                  </div>
               </ScrollArea>

               <div className="absolute bottom-8 left-8 right-8">
                 <Button onClick={() => setShowFilters(false)} className="w-full bg-zinc-950 rounded-none h-14 uppercase tracking-widest text-xs">
                   Apply Filter
                 </Button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
