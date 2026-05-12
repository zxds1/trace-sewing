/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Play, Server, Shield, Zap, Info, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { damping: 25, stiffness: 150 };
  const machineX = useSpring(isMobile ? 0 : mousePosition.x, springConfig);
  const machineY = useSpring(isMobile ? 0 : mousePosition.y, springConfig);

  const stats = [
    { label: "5,000+ Machines Delivered", icon: <Globe size={12} />, delay: 0.8 },
    { label: "98% Client Satisfaction", icon: <Users size={12} />, delay: 1.0 },
    { label: "24/7 Technical Support", icon: <Shield size={12} />, delay: 1.2 },
  ];

  const marqueePhrases = [
    'Consisted tension every time',
    'Thread it once, sew forever',
    'Elevate your craft',
    'Outlasts the competition',
    'The machine tailors dream about',
    'preferred by top designers',
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20 px-4 sm:px-6 lg:px-8"
      id="hero-section"
    >
      {/* Simple clean background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-white" />
      </div>

      {/* Ambient decorative circles */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.06, 0.18, 0.06],
                scale: [1, 1.08, 1],
                x: [Math.random() * 80, Math.random() * -80],
                y: [Math.random() * 80, Math.random() * -80],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-56 h-56 bg-sky-200/20 rounded-full blur-[120px]"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[1px] bg-[#00539E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.36em] text-slate-600">
                Premium Industrial Equipment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-[#00539E] tracking-tight leading-snug">
              JUKI
              <br />
              <span className="text-slate-600">Sewing Machines</span>
              <br />
              <span className="relative inline-block">
                Built for
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-1 left-0 h-0.5 bg-sky-300 -z-10 w-full" 
                />
              </span>
              <br />
              Professionals
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            High-performance industrial and professional sewing machines engineered for precision, speed, and reliability. From fashion studios to large-scale manufacturing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button 
              asChild 
              className="group relative h-14 px-10 bg-[#00539E] text-white hover:bg-[#004080] rounded-none transition-all duration-300 font-bold tracking-wider text-[11px] overflow-hidden shadow-lg"
            >
              <Link to="/catalog">
                <span className="relative z-10 flex items-center">
                  Shop Machines <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8"
          >
            {[
              { label: "Financing Available", icon: <Zap size={10} /> },
              { label: "Nationwide Delivery", icon: <Server size={10} /> },
              { label: "Certified Support", icon: <Shield size={10} /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-slate-600">
                <span className="text-[#00539E]">{item.icon}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Machine Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
            style={{ x: machineX, y: machineY, rotateY: machineX }}
            className="relative z-20 w-full max-w-[600px] aspect-square"
          >
            {/* Spotlight backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,83,158,0.1),transparent_30%)] rounded-full blur-[120px] -z-10" />
            
            {/* The Machine Image - White background container */}
              <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full bg-white rounded-2xl shadow-xl border border-sky-100 p-8 flex items-center justify-center">
                <img
                  src="/assets/hero-machine.svg"
                  alt="JUKI Industrial Sewing Machine"
                  className="w-full h-full object-contain"
                  loading={isMobile ? 'lazy' : 'eager'}
                  decoding="async"
                />
              </div>

              {/* Floating Stat Cards */}
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                  className={cn(
                    "absolute backdrop-blur-sm bg-white border border-sky-200 p-3 rounded-md shadow-xl hidden md:flex items-center space-x-3 transition-colors cursor-default",
                    i === 0 ? "top-12 left-6" : i === 1 ? "bottom-20 right-6" : "top-1/2 right-6 -translate-y-1/2"
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-[#00539E] transition-transform">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-700 whitespace-nowrap max-w-xs">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Machine shadow/glow on floor */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-t from-sky-100/50 to-transparent blur-[40px] rounded-[100%]" />
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-sky-100 flex items-center overflow-hidden bg-[#00539E] backdrop-blur-sm z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({length: 10}).map((_, idx) => (
            <div key={idx} className="flex items-center px-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/80">
                {marqueePhrases[idx % marqueePhrases.length]} •
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Indicator */}
      <div className="absolute top-32 right-12 hidden xl:flex items-center space-x-3 z-30">
        <div className="relative">
          <div className="w-2 h-2 bg-[#00539E] rounded-full" />
          <div className="absolute inset-0 w-2 h-2 bg-[#00539E] rounded-full animate-ping" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <span className="text-[#00539E]">12</span> Technicians Active
        </span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-sky-300/40 to-transparent" />
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-500 rotate-90 origin-left ml-1 translate-y-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
