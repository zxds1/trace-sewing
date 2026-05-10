/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  MessageSquare, 
  Plus, 
  Minus, 
  CheckCircle2, 
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from '@/CartContext';
import { toast } from 'sonner';
import ProductCard from '@/components/catalog/ProductCard';
import FinancingForm from '@/components/forms/FinancingForm';
import { Helmet } from 'react-helmet-async';

export default function ProductDetails() {
  const { id } = useParams();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white p-4 text-center">
        <h1 className="text-4xl font-display font-bold text-zinc-950">Model Not Found</h1>
        <p className="text-zinc-500 mt-4 max-w-sm">The machinery model you specified does not exist in our current fleet archive.</p>
        <Button asChild className="mt-8 bg-zinc-950 rounded-none h-12 uppercase tracking-widest text-xs">
          <Link to="/catalog">Back to Fleet</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast.success(`${product.name} added to your units.`, {
       description: 'Production asset ready for deployment.',
       action: {
         label: 'View Cart',
         onClick: () => window.location.href = '/cart'
       }
    });
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{product.name} | TRACE Sewing Industrial Fleet</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | TRACE SEWING`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-zinc-50 py-4 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
             <Link to="/" className="hover:text-zinc-900">Home</Link>
             <ChevronRight size={10} />
             <Link to="/catalog" className="hover:text-zinc-900">Fleet</Link>
             <ChevronRight size={10} />
             <span className="text-zinc-900">{product.name}</span>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Visual Showcase */}
          <div className="space-y-6">
            <div className="aspect-square bg-zinc-50 overflow-hidden relative border border-zinc-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 {product.badges?.map(b => (
                   <Badge key={b} className="bg-zinc-950 text-white rounded-none border-none text-[10px] font-bold uppercase px-4 py-1">{b}</Badge>
                 ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square border-2 transition-all ${activeImage === i ? 'border-zinc-950' : 'border-zinc-100 opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} shadow ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Configuration & Purchase */}
          <div className="flex flex-col">
             <div className="mb-2 flex items-center space-x-2">
               <div className="flex text-zinc-950">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">({product.reviewsCount} Verified Deployments)</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-2">{product.name}</h1>
             <p className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] mb-8">{product.category} Series • ID: {product.id.toUpperCase()}</p>
             
             <div className="flex items-baseline space-x-4 mb-8">
               <span className="text-4xl font-mono font-bold">{formatCurrency(product.price)}</span>
               <span className="text-zinc-500 text-sm line-through opacity-50">{formatCurrency(product.price * 1.2)}</span>
               <Badge variant="outline" className="rounded-none border-zinc-200 text-green-600 font-bold uppercase text-[10px]">20% Launch Offer</Badge>
             </div>

             <div className="bg-zinc-50 p-6 border border-zinc-100 mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck size={20} className="text-zinc-950" />
                    <span className="text-xs font-bold uppercase tracking-widest">Financing Available</span>
                  </div>
                  <FinancingForm productName={product.name} productId={product.id} />
                </div>
                <p className="text-xs text-zinc-500 italic">As low as {formatCurrency(product.price / 30)}/month with Trace Flex Credit. Subject to approval.</p>
             </div>

             <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-2 text-sm">
                   <div className={`w-2 h-2 rounded-full ${product.stockStatus === 'In Stock' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                   <span className="font-bold uppercase tracking-wide text-xs">{product.stockStatus}</span>
                   <span className="text-zinc-400">| Standard delivery: 3–5 Business Days</span>
                </div>
                
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center border border-zinc-200 h-14">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 hover:bg-zinc-50 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-mono font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 hover:bg-zinc-50 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-grow bg-zinc-950 text-white rounded-none h-14 uppercase tracking-widest font-bold text-xs"
                  >
                    Deploy to Production (Add to Cart)
                  </Button>
                </div>
                <Button className="w-full bg-white border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white rounded-none h-14 uppercase tracking-widest font-bold text-xs">
                  Instant Inquiry via WhatsApp
                </Button>

                {/* Social Sharing */}
                <div className="pt-6 flex items-center justify-between border-t border-zinc-100">
                  <div className="flex items-center space-x-2">
                    <Share2 size={14} className="text-zinc-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Share Asset:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} className="p-2 hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-950">
                      <Facebook size={16} />
                    </button>
                    <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')} className="p-2 hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-950">
                      <Twitter size={16} />
                    </button>
                    <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')} className="p-2 hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-950">
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>
             </div>

             {/* USPs */}
             <div className="grid grid-cols-2 gap-4 pt-10 border-t border-zinc-100">
                <div className="flex items-start space-x-3">
                   <Truck size={18} className="text-zinc-400 shrink-0" />
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest">Business Dispatch</p>
                      <p className="text-[10px] text-zinc-500 leading-tight">Global priority shipping with industrial crating.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-3">
                   <RotateCcw size={18} className="text-zinc-400 shrink-0" />
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest">Buyback Program</p>
                      <p className="text-[10px] text-zinc-500 leading-tight">Trade in your old equipment for high credit.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-32">
           <div className="max-w-4xl">
             <h2 className="text-4xl font-display font-bold tracking-tighter mb-12">Technical Specifications</h2>
             <div className="border-t border-zinc-100 divide-y divide-zinc-100">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="py-4 grid grid-cols-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{key}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">{value}</span>
                  </div>
                ))}
             </div>
             
             <div className="mt-20 space-y-12">
                {product.videoUrl && (
                  <div className="mb-20">
                    <div className="flex items-center space-x-2 mb-6">
                      <Video size={20} className="text-zinc-950" />
                      <h3 className="text-xl font-display font-bold">Operation Showcase</h3>
                    </div>
                    <div className="aspect-video w-full bg-zinc-900 border border-zinc-200">
                      <iframe 
                        className="w-full h-full"
                        src={product.videoUrl}
                        title={`${product.name} Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                <div>
                   <h3 className="text-xl font-display font-bold mb-6">Equipment Description</h3>
                   <p className="text-zinc-600 leading-relaxed text-sm md:text-base">{product.description} Built for continuous operation in high-output environments, the {product.name} delivers precision that manual machines simply cannot match. From heavy denim to delicate silk, the adaptive tension system ensures consistent stitch quality across all substrates.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {product.features.map((feat, i) => (
                     <div key={i} className="flex items-center space-x-3 p-4 bg-zinc-50 border border-zinc-100">
                        <CheckCircle2 size={16} className="text-zinc-950" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{feat}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="mt-24">
               <h3 className="text-xl font-display font-bold mb-8">Asset Q&A</h3>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-zinc-100">
                    <AccordionTrigger className="text-[10px] font-bold uppercase tracking-widest hover:no-underline">Standard Commercial Warranty</AccordionTrigger>
                    <AccordionContent className="text-zinc-500 text-xs">
                      All Trace industrial machines come with a 2-year warranty on electronic components and a 5-year warranty on mechanical structural parts.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-zinc-100">
                    <AccordionTrigger className="text-[10px] font-bold uppercase tracking-widest hover:no-underline">Power Grid Requirements</AccordionTrigger>
                    <AccordionContent className="text-zinc-500 text-xs">
                      This unit operates on standard 220V/50Hz single phase power. High-efficiency internal transformers prevent damage from grid fluctuations.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-zinc-100">
                    <AccordionTrigger className="text-[10px] font-bold uppercase tracking-widest hover:no-underline">On-Site Installation</AccordionTrigger>
                    <AccordionContent className="text-zinc-500 text-xs">
                      White-glove assembly and calibration is available as a premium add-on for orders over $2,500.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
             </div>
           </div>
        </div>

        {/* Related */}
        <div className="mt-32">
           <h2 className="text-2xl font-display font-bold tracking-tighter mb-12">Comparable Models</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <div key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
