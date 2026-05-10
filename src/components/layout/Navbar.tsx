/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop Machines', href: '/catalog' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-zinc-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-zinc-950 text-white w-8 h-8 flex items-center justify-center font-bold text-xl tracking-tighter">T</div>
            <span className="text-xl font-bold tracking-tight font-sans text-zinc-900 group-hover:text-zinc-600 transition-colors">
              TRACE SEWING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium tracking-wide uppercase transition-colors hover:text-zinc-900',
                    isActive ? 'text-zinc-900' : 'text-zinc-500'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-zinc-950 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Button variant="outline" className="rounded-none border-zinc-950 px-6 font-semibold uppercase text-xs tracking-widest hover:bg-zinc-950 hover:text-white transition-all">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="p-2 text-zinc-500 relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-zinc-950 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-zinc-900 py-2 border-b border-zinc-100"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <Button className="w-full rounded-none bg-zinc-950 h-12 uppercase tracking-widest text-xs">
                  Request Quote
                </Button>
                <div className="flex items-center justify-center space-x-2 text-zinc-500 text-sm">
                  <Phone size={16} />
                  <span>Call Us: +1 (234) 567-890</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
