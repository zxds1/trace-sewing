/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'Industrial' | 'Home' | 'Embroidery' | 'Overlock';
  brand: string;
  price: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  images: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  badges?: string[];
  rating: number;
  reviewsCount: number;
  videoUrl?: string;
  usageType: 'Commercial' | 'Residential';
  powerType: 'Servo Motor' | 'Clutch Motor' | 'Electric';
  speed: number; // SPM
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Inquiry {
  id: string;
  productId?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'General' | 'Quote' | 'Financing' | 'Repair';
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  createdAt: string;
}
