/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-[#00539E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white text-[#00539E] w-8 h-8 flex items-center justify-center font-bold text-xl tracking-tighter rounded-lg">J</div>
              <span className="text-xl font-bold tracking-tight font-sans text-white">
                JUKI SEWING
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-white/80">
              Premium industrial and professional sewing machines. Precision engineering for modern production.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white/80 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white/80 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white/80 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-white/80 transition-colors">Contact Support</Link></li>
              <li><Link to="/track-order" className="hover:text-white/80 transition-colors">Track Your Order</Link></li>
              <li><Link to="/shipping" className="hover:text-white/80 transition-colors">Shipping Info</Link></li>
              <li><Link to="/locations" className="hover:text-white/80 transition-colors">Global Offices</Link></li>
              <li><Link to="/privacy" className="hover:text-white/80 transition-colors opacity-70">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Login/Signup Section */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Account</h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-xs mb-4 text-white/80">Join our network of professionals</p>
              <div className="space-y-3">
                <Link to="/register">
                  <Button variant="outline" className="w-full border-white/40 text-white rounded-none text-sm h-10">
                    <UserPlus size={16} className="mr-2" />
                    Create Account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="w-full bg-white text-[#00539E] hover:bg-white/90 rounded-none text-sm h-10">
                    <LogIn size={16} className="mr-2" />
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-xs mb-4 text-white/80">Get updates on new inventory and wholesale offers.</p>
            <div className="flex space-x-2">
              <Input 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30 rounded-none" 
                placeholder="Email Address"
              />
              <Button size="icon" className="bg-white text-[#00539E] hover:bg-white/90 rounded-none shrink-0">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/70">
          <p>© 2024 TRACE SEWING SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Powered by Industrial Precision</span>
            <div className="flex space-x-4 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-70 grayscale" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-70 grayscale" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/M-PESA_logo.svg/200px-M-PESA_logo.svg.png" alt="M-Pesa" className="h-4 opacity-70 grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
