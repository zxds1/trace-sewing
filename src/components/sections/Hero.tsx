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

  React.useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { damping: 25, stiffness: 150 };
  const machineX = useSpring(mousePosition.x, springConfig);
  const machineY = useSpring(mousePosition.y, springConfig);

  const stats = [
    { label: "5,000+ Machines Delivered", icon: <Globe size={12} />, delay: 0.8 },
    { label: "98% Client Satisfaction", icon: <Users size={12} />, delay: 1.0 },
    { label: "24/7 Technical Support", icon: <Shield size={12} />, delay: 1.2 },
  ];

  const marqueePhrases = [
    'Direct Drive Systems',
    'Servo Precision',
    'Commercial Grade Motors',
    'Industrial Stitch Control',
    'High-Speed Production',
    'Automated Tension Systems',
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20 px-4 sm:px-6 lg:px-8"
      id="hero-section"
    >
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Ambient particulate + subtle warm glows for depth */}
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
            className="absolute w-56 h-56 bg-amber-500/6 rounded-full blur-[120px]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_40%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[1px] bg-zinc-600/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.36em] text-zinc-400">
                Industrial Sewing Systems
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold text-white tracking-tight leading-snug">
              Precision
              <br />
              <span className="text-zinc-400">Machines</span> built for
              <br />
              <span className="relative inline-block">
                serious
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-1 left-0 h-0.5 bg-amber-400/25 -z-10 w-full" 
                />
              </span>
              <br />
              production
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            From fashion studios to industrial workshops, TRACE Sewing delivers high-performance machines engineered for speed, reliability, and commercial-grade output.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button 
              asChild 
              className="group relative h-14 px-10 bg-white text-black hover:bg-zinc-200 rounded-none transition-all duration-300 font-bold tracking-wider text-[11px] overflow-hidden"
            >
              <Link to="/catalog">
                <span className="relative z-10 flex items-center">
                  Shop Machines <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="h-14 px-10 border-zinc-800 text-white hover:bg-white hover:text-black rounded-none transition-all duration-300 font-bold tracking-wider text-[11px]"
            >
              <Link to="/contact">Request Quote</Link>
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
              <div key={i} className="flex items-center space-x-2 text-zinc-500">
                <span className="text-amber-400">{item.icon}</span>
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_30%)] rounded-full blur-[120px] -z-10" />
            
            {/* The Machine Image */}
              <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full">
                <img
                  src="/assets/hero-machine.svg"
                  alt="TRACE Industrial Sewing Machine"
                  className="w-full h-full object-contain"
                />

                {/* Metallic reflection sweep */}
                <div className="absolute inset-0 pointer-events-none metal-sweep opacity-70 mix-blend-screen" />
                {/* Soft foreground shadow plane */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-gradient-to-t from-black/40 to-transparent blur-[20px] -z-10 rounded-full" />
              </div>

              {/* Floating Stat Cards */}
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                  className={cn(
                    "absolute backdrop-blur-sm bg-zinc-900/60 border border-zinc-700/40 p-3 rounded-md shadow-xl hidden md:flex items-center space-x-3 transition-colors cursor-default",
                    i === 0 ? "top-12 left-6" : i === 1 ? "bottom-20 right-6" : "top-1/2 right-6 -translate-y-1/2"
                  )}
                >
                  <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white whitespace-nowrap max-w-xs">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Machine shadow/glow on floor */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-t from-black/30 to-transparent blur-[40px] rounded-[100%]" />
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/5 flex items-center overflow-hidden bg-white/[0.02] backdrop-blur-sm z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({length: 10}).map((_, idx) => (
            <div key={idx} className="flex items-center px-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-zinc-500">
                {marqueePhrases[idx % marqueePhrases.length]} •
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Indicator */}
      <div className="absolute top-32 right-12 hidden xl:flex items-center space-x-3 z-30">
        <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <span className="text-white">12</span> Technicians Active
        </span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500/40 to-transparent" />
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-500 rotate-90 origin-left ml-1 translate-y-4">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
