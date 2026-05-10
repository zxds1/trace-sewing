/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function FinancingForm({ productName, productId }: { productName?: string, productId?: string }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      toast.success("Application Received", {
        description: "Our financial specialists will review your credentials within 4 hours."
      });
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-none border-zinc-950 w-full md:w-auto h-12 px-8 uppercase text-[10px] font-bold tracking-widest hover:bg-zinc-950 hover:text-white transition-all">
          Apply for Financing
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl rounded-none border-zinc-200 p-0 overflow-hidden">
        <div className="bg-zinc-950 p-8 text-white">
          <DialogHeader>
            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheck className="text-zinc-400" size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Trace Flex Credit Protocol</span>
            </div>
            <DialogTitle className="text-2xl font-display font-bold tracking-tighter">Machinery Acquisition Financing</DialogTitle>
            <DialogDescription className="text-zinc-500 text-xs uppercase font-bold tracking-tight mt-2">
              Accelerate your production line today. Pay in flexible industrial tiers.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-8 bg-white">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-zinc-50 p-4 border border-zinc-100 flex items-start space-x-3">
                 <div className="w-10 h-10 bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="font-bold text-xs uppercase tracking-tighter">Unit</span>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Target Asset</h4>
                    <p className="text-sm font-bold">{productName || 'General Fleet Upgrade'}</p>
                 </div>
              </div>

              <div className="space-y-4">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-zinc-100 pb-2">Business Eligibility</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Years in Operation</label>
                       <select className="w-full bg-white border border-zinc-200 h-11 px-3 outline-none text-xs font-bold uppercase">
                          <option>0-2 Years</option>
                          <option>2-5 Years</option>
                          <option>5+ Years</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Monthly Volume (Units)</label>
                       <Input className="rounded-none border-zinc-200 h-11" placeholder="Estim." />
                    </div>
                 </div>
              </div>

              <Button onClick={() => setStep(2)} className="w-full bg-zinc-950 text-white rounded-none h-14 uppercase tracking-widest font-bold text-xs group">
                Enter Credential Phase <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-zinc-100 pb-2">Identification & Liaison</h4>
                  <div className="grid grid-cols-2 gap-4">
                     <Input required placeholder="Full Name" className="rounded-none border-zinc-200" />
                     <Input required placeholder="Operational Email" className="rounded-none border-zinc-200" />
                  </div>
                  <Input required placeholder="Company Registration ID (Optional)" className="rounded-none border-zinc-200" />
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Requested Credit Limit</label>
                     <Input required type="number" placeholder="$5,000" className="rounded-none border-zinc-200" />
                  </div>
               </div>

               <div className="flex gap-4">
                  <Button type="button" onClick={() => setStep(1)} variant="outline" className="rounded-none h-14 px-6 uppercase tracking-widest text-[10px] font-bold">Back</Button>
                  <Button disabled={isSubmitting} type="submit" className="flex-grow bg-zinc-950 text-white rounded-none h-14 uppercase tracking-widest font-bold text-xs">
                    {isSubmitting ? 'Verifying Credit Protocol...' : 'Finalize Application'}
                  </Button>
               </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-12 space-y-6">
               <div className="w-16 h-16 bg-zinc-950 text-white rounded-full flex items-center justify-center mx-auto mb-4 scale-in-center">
                  <CheckCircle2 size={32} />
               </div>
               <h3 className="text-2xl font-display font-bold tracking-tighter">Application Logged</h3>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">Reference: <span className="font-mono font-bold text-zinc-950">TR-FIN-{Math.floor(Math.random()*100000)}</span>. Our financial nexus will contact your operational liaison shortly.</p>
               <Button onClick={() => setStep(1)} variant="link" className="text-[10px] font-bold uppercase tracking-widest text-zinc-950 underline underline-offset-4">New Inquiry</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
