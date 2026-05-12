/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, UserPlus, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      toast.success('Account created successfully! Welcome to TRACE.');
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-24 pb-16 px-4">
      <Helmet>
        <title>Create Account — TRACE Sewing</title>
        <meta name="description" content="Create your TRACE Sewing account to access exclusive pricing, order tracking, and machine inventory for industrial sewing professionals." />
      </Helmet>

      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-[#00539E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <UserPlus className="text-white" size={28} />
          </div>
          <h1 className="text-3xl font-bold text-[#00539E] mb-2">Join TRACE</h1>
          <p className="text-slate-600">Create your professional account</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-sky-100 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-sky-50 border-sky-200 focus:border-[#00539E] focus:ring-[#00539E]"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="pl-10 bg-sky-50 border-sky-200 focus:border-[#00539E] focus:ring-[#00539E]"
                  placeholder="Your Business Ltd."
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-sky-50 border-sky-200 focus:border-[#00539E] focus:ring-[#00539E]"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-sky-50 border-sky-200 focus:border-[#00539E] focus:ring-[#00539E]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-sky-300 text-[#00539E] focus:ring-[#00539E]"
                required
              />
              <label htmlFor="terms" className="text-sm text-slate-600">
                I agree to the{' '}
                <Link to="/privacy" className="text-[#00539E] hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="text-[#00539E] hover:underline">
                  Terms of Service
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-[#00539E] hover:bg-sky-50 border-2 border-[#00539E] h-12 rounded-lg font-bold tracking-wide"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#00539E] font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
