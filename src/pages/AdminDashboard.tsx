/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  Users, 
  Plus,
  Search,
  MoreVertical,
  Download,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PRODUCTS } from '@/constants';
import { cn, formatCurrency } from '@/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const chartData = [
  { name: 'Jan', revenue: 45000, orders: 120 },
  { name: 'Feb', revenue: 52000, orders: 145 },
  { name: 'Mar', revenue: 48000, orders: 132 },
  { name: 'Apr', revenue: 61000, orders: 168 },
  { name: 'May', revenue: 55000, orders: 151 },
  { name: 'Jun', revenue: 67000, orders: 184 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-zinc-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
           <div>
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                 <div className="w-6 h-[1px] bg-zinc-300"></div>
                 <span>Trace Systems Command</span>
              </div>
              <h1 className="text-4xl font-display font-bold tracking-tighter">Control Center</h1>
           </div>
           <div className="flex items-center space-x-3">
              <Button variant="outline" className="rounded-none h-11 px-6 uppercase text-[10px] font-bold tracking-widest border-zinc-200">
                 <Download size={16} className="mr-2" /> Export Logs
              </Button>
              <Button className="rounded-none h-11 px-6 bg-zinc-950 uppercase text-[10px] font-bold tracking-widest">
                 <Plus size={16} className="mr-2" /> New Entry
              </Button>
           </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
           <TabsList className="bg-transparent border-b border-zinc-200 w-full justify-start rounded-none h-14 p-0 space-x-8">
              <TabsTrigger 
                value="overview" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-950 data-[state=active]:bg-transparent px-2 h-full text-xs uppercase font-bold tracking-widest text-zinc-400 data-[state=active]:text-zinc-950"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="fleet" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-950 data-[state=active]:bg-transparent px-2 h-full text-xs uppercase font-bold tracking-widest text-zinc-400 data-[state=active]:text-zinc-950"
              >
                Fleet Mgmt
              </TabsTrigger>
              <TabsTrigger 
                value="orders" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-950 data-[state=active]:bg-transparent px-2 h-full text-xs uppercase font-bold tracking-widest text-zinc-400 data-[state=active]:text-zinc-950"
              >
                Deployments
              </TabsTrigger>
              <TabsTrigger 
                value="inquiries" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-950 data-[state=active]:bg-transparent px-2 h-full text-xs uppercase font-bold tracking-widest text-zinc-400 data-[state=active]:text-zinc-950"
              >
                Inquiries
              </TabsTrigger>
           </TabsList>

           <TabsContent value="overview" className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Gross Fleet Rev</CardTitle>
                       <BarChart3 size={16} className="text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                       <div className="text-2xl font-mono font-bold">$342,890.00</div>
                       <p className="text-[10px] text-green-600 font-bold mt-1 uppercase tracking-tight">+14.2% from prev peak</p>
                    </CardContent>
                 </Card>
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Active Orders</CardTitle>
                       <ShoppingCart size={16} className="text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                       <div className="text-2xl font-mono font-bold">42 Units</div>
                       <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-tight">8 pending verification</p>
                    </CardContent>
                 </Card>
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fleet Units</CardTitle>
                       <Package size={16} className="text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                       <div className="text-2xl font-mono font-bold">128 SKU</div>
                       <p className="text-[10px] text-orange-600 font-bold mt-1 uppercase tracking-tight">4 SKU stock alert</p>
                    </CardContent>
                 </Card>
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Repair Pipeline</CardTitle>
                       <TrendingUp size={16} className="text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                       <div className="text-2xl font-mono font-bold">18 Reqs</div>
                       <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-tight">Avg 24h response time</p>
                    </CardContent>
                 </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader>
                       <CardTitle className="text-xs uppercase font-bold tracking-widest">Revenue Trajectory</CardTitle>
                       <CardDescription className="text-[10px] uppercase font-bold tracking-tight">Fleet performance (last 6 months)</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] pt-8">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                             <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                             <YAxis fontSize={10} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                             <Tooltip 
                                contentStyle={{ backgroundColor: '#0a0a0a', border: 'none', color: '#fff' }}
                                itemStyle={{ color: '#fff', fontSize: '10px', textTransform: 'uppercase' }}
                                labelStyle={{ display: 'none' }}
                             />
                             <Bar dataKey="revenue" fill="#0a0a0a" radius={[0, 0, 0, 0]} />
                          </BarChart>
                       </ResponsiveContainer>
                    </CardContent>
                 </Card>
                 <Card className="rounded-none border-zinc-200 shadow-none">
                    <CardHeader>
                       <CardTitle className="text-xs uppercase font-bold tracking-widest">Inquiry Flux</CardTitle>
                       <CardDescription className="text-[10px] uppercase font-bold tracking-tight">Active communication trends</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] pt-8">
                       <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                             <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                             <YAxis fontSize={10} axisLine={false} tickLine={false} />
                             <Tooltip 
                                contentStyle={{ backgroundColor: '#0a0a0a', border: 'none', color: '#fff' }}
                                itemStyle={{ color: '#fff', fontSize: '10px', textTransform: 'uppercase' }}
                                labelStyle={{ display: 'none' }}
                             />
                             <Line type="monotone" dataKey="orders" stroke="#0a0a0a" strokeWidth={2} dot={{ fill: '#0a0a0a', r: 4 }} activeDot={{ r: 6 }} />
                          </LineChart>
                       </ResponsiveContainer>
                    </CardContent>
                 </Card>
              </div>
           </TabsContent>

           <TabsContent value="fleet">
              <Card className="rounded-none border-zinc-200 shadow-none">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                       <CardTitle className="text-xs uppercase font-bold tracking-widest">Active Fleet Inventory</CardTitle>
                       <CardDescription className="text-[10px] uppercase font-bold tracking-tight">Manage all machinist assets</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                       <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                          <Input className="pl-9 h-9 rounded-none border-zinc-200 text-xs w-64 focus-visible:ring-zinc-950" placeholder="Search fleet ID..." />
                       </div>
                       <Button variant="outline" size="icon" className="h-9 w-9 rounded-none border-zinc-200">
                          <Filter size={14} />
                       </Button>
                    </div>
                 </CardHeader>
                 <CardContent>
                    <Table>
                       <TableHeader className="bg-zinc-50 border-y border-zinc-100">
                          <TableRow className="hover:bg-transparent">
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4">Status</TableHead>
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4">Model Identity</TableHead>
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4">Category</TableHead>
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4">Base Valuation</TableHead>
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4">Uptime Rating</TableHead>
                             <TableHead className="text-[10px] font-bold uppercase text-zinc-500 py-4 text-right">Actions</TableHead>
                          </TableRow>
                       </TableHeader>
                       <TableBody>
                          {PRODUCTS.map((p) => (
                             <TableRow key={p.id} className="border-zinc-100 hover:bg-zinc-50/50">
                                <TableCell>
                                   <Badge className={cn(
                                     "rounded-none text-[8px] uppercase font-bold border-none flex items-center w-fit gap-1", 
                                     p.stockStatus === 'In Stock' ? 'bg-green-100 text-green-700' : 
                                     p.stockStatus === 'Low Stock' ? 'bg-orange-100 text-orange-700 animate-pulse' :
                                     'bg-red-100 text-red-700'
                                   )}>
                                      {p.stockStatus === 'Low Stock' && <AlertCircle size={8} />}
                                      {p.stockStatus}
                                   </Badge>
                                </TableCell>
                                <TableCell>
                                   <div className="flex flex-col">
                                      <span className="text-xs font-bold font-display italic uppercase tracking-tight">{p.name}</span>
                                      <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{p.id}</span>
                                   </div>
                                </TableCell>
                                <TableCell className="text-[10px] font-bold uppercase tracking-tight text-zinc-500">{p.category}</TableCell>
                                <TableCell className="font-mono text-xs font-bold">{formatCurrency(p.price)}</TableCell>
                                <TableCell>
                                   <div className="flex items-center space-x-2">
                                      <div className="w-12 h-1 bg-zinc-100 relative">
                                         <div className="absolute inset-y-0 left-0 bg-zinc-950" style={{ width: `${(p.rating / 5) * 100}%` }}></div>
                                      </div>
                                      <span className="text-[10px] font-bold">{p.rating}</span>
                                   </div>
                                </TableCell>
                                <TableCell className="text-right">
                                   <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                                      <MoreVertical size={16} />
                                   </button>
                                </TableCell>
                             </TableRow>
                          ))}
                       </TableBody>
                    </Table>
                 </CardContent>
              </Card>
           </TabsContent>

           <TabsContent value="orders">
              <div className="py-20 text-center border-2 border-dashed border-zinc-200">
                 <Clock size={40} className="mx-auto mb-4 text-zinc-200" />
                 <h3 className="text-xl font-display font-bold text-zinc-300">Live Deployment Stream Pending</h3>
                 <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mt-2">Waiting for next synchronization cycle</p>
              </div>
           </TabsContent>

           <TabsContent value="inquiries">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[1, 2, 3].map(i => (
                    <Card key={i} className="rounded-none border-zinc-200 shadow-none group hover:border-zinc-950 transition-colors">
                       <CardHeader className="bg-zinc-50/50 pb-4">
                          <div className="flex justify-between items-start mb-2">
                             <Badge className="bg-zinc-950 text-white rounded-none border-none text-[8px] uppercase">New Inquiry</Badge>
                             <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">2h Ago</span>
                          </div>
                          <CardTitle className="text-sm font-bold font-display">Fleet Wholesale Quote Request</CardTitle>
                          <CardDescription className="text-[10px] font-bold uppercase text-zinc-500">Fabric Bloom Co. • Marcus Vance</CardDescription>
                       </CardHeader>
                       <CardContent className="pt-4 space-y-4">
                          <p className="text-xs text-zinc-600 line-clamp-2 italic">"We are looking to expand our Berlin hub with 12 unit of TRACE 1000 PRO. Need financing breakdown..."</p>
                          <div className="flex items-center justify-between pt-2">
                             <div className="flex -space-x-2">
                                {[1, 2].map(x => <div key={x} className="w-5 h-5 bg-zinc-200 border-2 border-white rounded-full"></div>)}
                             </div>
                             <Button variant="link" className="text-[10px] font-bold uppercase tracking-widest text-zinc-950 p-0 h-auto">
                                View Specification
                             </Button>
                          </div>
                       </CardContent>
                    </Card>
                 ))}
              </div>
           </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
