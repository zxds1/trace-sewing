/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'industrial',
    name: 'Industrial Machines',
    description: 'High-speed, durable machines for commercial production.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'home',
    name: 'Home & Professional',
    description: 'Versatile machines for home businesses and tailors.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'embroidery',
    name: 'Embroidery Systems',
    description: 'Precision computerized machines for intricate designs.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'overlock',
    name: 'Overlock & Specialized',
    description: 'Professional finishing and specialized stitching solutions.',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?auto=format&fit=crop&q=80&w=1200',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'tr-1000-pro',
    name: 'TRACE 1000 PRO',
    category: 'Industrial',
    brand: 'TRACE',
    price: 1299,
    description: 'The ultimate workhorse for modern textile factories. Precision stitching meets unparalleled speed.',
    features: [
      'Automatic thread cutter',
      'Integrated direct drive motor',
      'Electronic tension control',
      'Programmable stitch patterns'
    ],
    specs: {
      'Max Speed': '5000 SPM',
      'Motor Type': 'Direct Drive Servo',
      'Lubrication': 'Automatic',
      'Needle Type': 'DBx1'
    },
    images: [
      'https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1584184924103-e31005b8e3f2?auto=format&fit=crop&q=80&w=1200'
    ],
    stockStatus: 'In Stock',
    badges: ['Best Seller', 'Commercial Grade'],
    rating: 4.9,
    reviewsCount: 124,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder industrial video
    usageType: 'Commercial',
    powerType: 'Servo Motor',
    speed: 5000
  },
  {
    id: 'tr-v8-stitch',
    name: 'V8 Master Stitch',
    category: 'Overlock',
    brand: 'TRACE',
    price: 899,
    description: 'Professional 4-thread overlocker for clean finishes and durable seams on any fabric.',
    features: [
      'Differential feed',
      'Adjustable cutting width',
      'Built-in rolled hem',
      'Heavy-duty metal frame'
    ],
    specs: {
      'Speed': '1300 SPM',
      'Threads': '3/4 Thread',
      'Stitch Length': '1-4mm',
      'Power': '120W'
    },
    images: [
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=1200'
    ],
    stockStatus: 'Low Stock',
    badges: ['New'],
    rating: 4.8,
    reviewsCount: 42,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1300
  },
  {
    id: 'tr-e95-elite',
    name: 'TRACE E95 Elite Embroidery',
    category: 'Embroidery',
    brand: 'TRACE',
    price: 3499,
    description: '15-needle commercial embroidery system with AI-assisted pathing and intelligent thread break detection.',
    features: [
      '15 Needles / 15 Colors',
      'Intelligent pathing engine',
      'Massive 1200x500mm field',
      'Remote wireless upload'
    ],
    specs: {
      'Head count': '1 Head',
      'Needles': '15',
      'Speed': '1200 SPM',
      'Field Size': '1200x500mm'
    },
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200'
    ],
    stockStatus: 'In Stock',
    badges: ['Advanced Tech'],
    rating: 5.0,
    reviewsCount: 18,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1200
  },
  {
    id: 'tr-home-s1',
    name: 'TRACE Home Studio S1',
    category: 'Home',
    brand: 'TRACE',
    price: 499,
    description: 'Heavy-duty performance in a compact frame. Perfect for boutique designers and home-based businesses.',
    features: [
      'Cast metal internal frame',
      '90 built-in stitch patterns',
      'One-step buttonhole',
      'Adjustable foot pressure'
    ],
    specs: {
      'Speed': '850 SPM',
      'Stitch Count': '90',
      'Motor': '90W High Torque',
      'Weight': '12kg'
    },
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200'
    ],
    stockStatus: 'In Stock',
    badges: ['Top Choice'],
    rating: 4.7,
    reviewsCount: 231,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 850
  }
];
