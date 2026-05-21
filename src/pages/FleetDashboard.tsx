import React from 'react';
import { 
  LayoutDashboard, Car, Calendar, DollarSign, 
  TrendingUp, Users, Settings, Plus, Bell,
  ChevronRight, ArrowUpRight, ArrowDownRight,
  Clock, CheckCircle2, XCircle, AlertCircle,
  FileText, ShieldCheck, MapPin, Briefcase,
  Wallet, PieChart, MoreVertical, Search
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';

const FleetDashboard = () => {
  const [open, setOpen] = React.useState(false);

  const stats = [
    { label: 'Total Earnings', value: 'Ksh 450,200', change: '+12.5%', up: true, icon: DollarSign },
    { label: 'Active Bookings', value: '12', icon: Calendar },
    { label: 'Fleet Size', value: '5 Vehicles', icon: Car },
    { label: 'Avg. Rating', value: '4.9/5', change: '+0.2', up: true, icon: TrendingUp },
  ];

  const recentBookings = [
    { id: '1', customer: 'David Kamau', vehicle: 'Toyota Prado', date: '12-14 Jun', status: 'Pending', price: 36000 },
    { id: '2', customer: 'Sarah Mwangi', vehicle: 'Mercedes S-Class', date: '15 Jun', status: 'Active', price: 25000 },
    { id: '3', customer: 'Evans Omondi', vehicle: 'Toyota Noah', date: '10 Jun', status: 'Completed', price: 8500 },
  ];

  const drivers = [
    { id: '1', name: 'John Mutua', rating: '4.8', status: 'On Trip', trips: 142 },
    { id: '2', name: 'Alice Wambui', rating: '4.9', status: 'Available', trips: 89 },
    { id: '3', name: 'Peter Otieno', rating: '4.5', status: 'Day Off', trips: 230 },
  ];

  const expenses = [
    { id: '1', item: 'Fuel - Toyota Prado', amount: 8500, date: '12 Jun', type: 'Fuel' },
    { id: '2', item: 'Service - Mercedes', amount: 45000, date: '10 Jun', type: 'Maintenance' },
    { id: '3', item: 'Cleaning - Noah', amount: 1200, date: '11 Jun', type: 'Other' },
  ];

  const handleAction = (type: string) => {
    toast.success(`Booking ${type} successfully!`, {
      description: `Notification sent to customer.`,
    });
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Vehicle added successfully!', {
      description: 'Our team will verify the documents within 24 hours.',
    });
    setOpen(false);
  };

  return (
    <div className="flex-1 bg-muted/30 pb-20 pt-8">
      <div className="container px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Fleet Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive management for SACCOs and car hire companies.</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl font-bold h-12">
              <PieChart size={20} className="mr-2" />
              Reports
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl font-bold h-12 shadow-lg">
                  <Plus size={20} className="mr-2" />
                  Add New Vehicle
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] rounded-3xl">
                <form onSubmit={handleAddVehicle}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black">Register New Vehicle</DialogTitle>
                    <DialogDescription>
                      Complete the form below to list your vehicle on RideLink.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 py-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Make & Model</Label>
                        <Input id="make" placeholder="e.g. Toyota Land Cruiser" required className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Year</Label>
                        <Input id="year" placeholder="2024" required className="rounded-xl" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="plate" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Plate Number</Label>
                        <Input id="plate" placeholder="KCN 123Z" required className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Daily Price (Ksh)</Label>
                        <Input id="price" type="number" placeholder="12000" required className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Vehicle Documents</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button type="button" variant="outline" className="h-20 border-dashed rounded-2xl flex flex-col gap-1">
                          <FileText size={20} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Logbook</span>
                        </Button>
                        <Button type="button" variant="outline" className="h-20 border-dashed rounded-2xl flex flex-col gap-1">
                          <ShieldCheck size={20} />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Insurance</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="w-full h-12 rounded-xl font-black">Submit for Verification</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-xl rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <stat.icon size={20} />
                  </div>
                  {stat.change && (
                    <div className={`flex items-center text-xs font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.change}
                    </div>
                  )}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-2xl font-black">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="bg-muted/50 p-1 rounded-2xl flex overflow-x-auto gap-1">
            <TabsTrigger value="bookings" className="rounded-xl font-bold px-6">Bookings</TabsTrigger>
            <TabsTrigger value="drivers" className="rounded-xl font-bold px-6">Drivers</TabsTrigger>
            <TabsTrigger value="expenses" className="rounded-xl font-bold px-6">Expenses</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl font-bold px-6">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-card p-6">
                  <CardTitle className="text-xl font-black">Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                        <div className="flex gap-4 items-center">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                            booking.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 
                            booking.status === 'Active' ? 'bg-blue-100 text-blue-600' : 
                            'bg-green-100 text-green-600'
                          }`}>
                            {booking.customer.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold">{booking.customer}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                              <span className="text-primary font-bold">{booking.vehicle}</span>
                              <span>•</span>
                              <span>{booking.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right hidden md:block mr-4">
                            <div className="font-black">Ksh {booking.price.toLocaleString()}</div>
                            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Revenue</div>
                          </div>
                          <Badge className={`font-bold ${
                            booking.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                            booking.status === 'Active' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' : 
                            'bg-green-500/10 text-green-500 border-green-500/20'
                          }`}>
                            {booking.status}
                          </Badge>
                          {booking.status === 'Pending' && (
                            <div className="flex gap-2">
                              <Button size="icon" variant="outline" className="h-8 w-8 rounded-lg border-green-500 text-green-500 hover:bg-green-50" onClick={() => handleAction('Approved')}>
                                <CheckCircle2 size={16} />
                              </Button>
                              <Button size="icon" variant="outline" className="h-8 w-8 rounded-lg border-red-500 text-red-500 hover:bg-red-50" onClick={() => handleAction('Rejected')}>
                                <XCircle size={16} />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="border-b bg-card p-6">
                  <CardTitle className="text-xl font-black">Maintenance Alerts</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold">Toyota Prado - KCN 123Z</span>
                        <span className="text-xs font-bold text-amber-500">Service Due</span>
                      </div>
                      <Progress value={85} className="h-2 bg-amber-100" />
                      <div className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-widest">500km remaining</div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold">Mercedes S - KDD 456Y</span>
                        <span className="text-xs font-bold text-green-500">Optimal</span>
                      </div>
                      <Progress value={20} className="h-2 bg-green-100" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl font-bold">Schedule Service</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black">Managed Drivers</h2>
              <Button size="sm" className="rounded-xl"><Plus size={16} className="mr-2" /> Add Driver</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {drivers.map(driver => (
                <Card key={driver.id} className="border-none shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary font-bold">{driver.name[0]}</div>
                      <div>
                        <h4 className="font-bold">{driver.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TrendingUp size={12} className="text-primary" />
                          {driver.trips} Trips Completed
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <Badge className={driver.status === 'Available' ? 'bg-green-500' : driver.status === 'On Trip' ? 'bg-blue-500' : 'bg-muted'}>{driver.status}</Badge>
                      <div className="flex items-center gap-1">
                        <TrendingUp size={14} className="text-primary" />
                        <span className="text-sm font-bold">{driver.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-6">
             <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-card p-6">
                  <CardTitle className="text-xl font-black">Fleet Expenses</CardTitle>
                  <Button size="sm" variant="outline" className="rounded-xl"><Plus size={16} className="mr-2" /> Log Expense</Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {expenses.map(expense => (
                      <div key={expense.id} className="p-6 flex items-center justify-between hover:bg-muted/30">
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                            <Wallet size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold">{expense.item}</h4>
                            <div className="text-xs text-muted-foreground font-medium">{expense.date} • {expense.type}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-black text-red-600">- Ksh {expense.amount.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-xl rounded-2xl p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-black">Revenue Trend</CardTitle>
                </CardHeader>
                <div className="h-64 bg-muted/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 flex items-end px-4 pb-4 gap-2">
                     {[40, 60, 45, 90, 75, 85, 95].map((h, i) => (
                       <div key={i} className="flex-1 bg-primary rounded-t-lg transition-all hover:opacity-80" style={{ height: `${h}%` }} />
                     ))}
                   </div>
                </div>
              </Card>
              <Card className="border-none shadow-xl rounded-2xl p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-lg font-black">Vehicle Utilization</CardTitle>
                </CardHeader>
                <div className="space-y-6">
                   {['Toyota Prado', 'Mercedes S', 'Toyota Noah'].map(v => (
                     <div key={v}>
                       <div className="flex justify-between text-sm font-bold mb-2">
                         <span>{v}</span>
                         <span>{Math.floor(Math.random() * 40 + 60)}%</span>
                       </div>
                       <Progress value={Math.floor(Math.random() * 40 + 60)} className="h-2" />
                     </div>
                   ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FleetDashboard;