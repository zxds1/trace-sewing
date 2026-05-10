/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white text-zinc-950 w-8 h-8 flex items-center justify-center font-bold text-xl tracking-tighter">T</div>
              <span className="text-xl font-bold tracking-tight font-sans text-white">
                TRACE SEWING
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing industrial-grade precision tools for modern sewing businesses. Professional maintenance and global machinery supply.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">All Machines</Link></li>
              <li><Link to="/catalog?cat=industrial" className="hover:text-white transition-colors">Industrial Systems</Link></li>
              <li><Link to="/catalog?cat=embroidery" className="hover:text-white transition-colors">Embroidery Units</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Machine Maintenance</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing Options</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Global Offices</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/admin" className="hover:text-zinc-500 transition-colors opacity-30">Admin Protocol</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Get updates on new inventory and wholesale offers.</p>
            <div className="flex space-x-2">
              <Input 
                className="bg-zinc-900 border-zinc-800 text-white rounded-none focus-visible:ring-zinc-700" 
                placeholder="Email Address"
              />
              <Button size="icon" className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-none shrink-0">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <p>© 2024 TRACE SEWING SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Powered by Industrial Precision</span>
            <div className="flex space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 opacity-50 gray" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3 opacity-50 grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
