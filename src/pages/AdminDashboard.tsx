import React from 'react';
import { 
  ShieldCheck, Users, Car, CreditCard, 
  AlertTriangle, CheckCircle, FileText, 
  TrendingUp, Search, Filter, MoreVertical,
  Banknote, History, AlertCircle, BarChart3,
  CalendarCheck, Settings2, RefreshCw
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const stats = [
    { label: 'Marketplace GMV', value: 'Ksh 12.4M', icon: TrendingUp, change: '+18%' },
    { label: 'Verified Partners', value: '1,240', icon: Users, change: '+45' },
    { label: 'Active Rentals', value: '856', icon: Car, change: '+12%' },
    { label: 'Fraud Alerts', value: '3', icon: AlertTriangle, color: 'text-red-500' },
  ];

  const verifications = [
    { id: '1', user: 'Matatu Galaxy SACCO', type: 'Fleet Owner', status: 'Pending', docs: ['Business Permit', 'ID', 'KRA Pin'] },
    { id: '2', user: 'James Maina', type: 'Driver', status: 'Pending', docs: ['License', 'Good Conduct', 'ID'] },
    { id: '3', user: 'Safari Co.', type: 'Vehicle', status: 'Flagged', details: 'Insurance Expiring' },
  ];

  const handleVerify = (name: string) => {
    toast.success(`${name} verified successfully!`, {
      description: 'The partner can now start transacting on the platform.',
    });
  };

  return (
    <div className="flex-1 bg-muted/30 pb-20 pt-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Marketplace Admin</h1>
            <p className="text-muted-foreground">Governance and ecosystem controls for RideLink Africa.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" className="rounded-xl font-bold h-12">
               <Settings2 size={20} className="mr-2" />
               System Config
             </Button>
             <Button className="rounded-xl font-bold h-12 shadow-lg">
               <Banknote size={20} className="mr-2" />
               Commission Settings
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-xl rounded-2xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-primary/10 rounded-xl text-primary ${stat.color} group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                    <div className="text-xl font-black">{stat.value}</div>
                    {stat.change && <div className="text-[10px] font-bold text-green-500">{stat.change} this month</div>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="verifications" className="space-y-6">
          <TabsList className="bg-muted/50 p-1 rounded-2xl flex overflow-x-auto gap-1">
            <TabsTrigger value="verifications" className="rounded-xl font-bold px-6">Verifications</TabsTrigger>
            <TabsTrigger value="billing" className="rounded-xl font-bold px-6">Subscriptions</TabsTrigger>
            <TabsTrigger value="disputes" className="rounded-xl font-bold px-6">Disputes</TabsTrigger>
            <TabsTrigger value="reports" className="rounded-xl font-bold px-6">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="verifications" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="border-b bg-card p-6 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black">Pending Verifications</CardTitle>
                  <div className="relative hidden sm:block">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search partners..." className="pl-10 h-10 w-64 rounded-xl" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {verifications.map((item) => (
                      <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center font-bold text-primary">
                            {item.type === 'Fleet Owner' ? <Users size={24} /> : item.type === 'Driver' ? <ShieldCheck size={24} /> : <Car size={24} />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold">{item.user}</h4>
                              <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter">{item.type}</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mt-1">
                              {item.docs ? (
                                <span>Docs: {item.docs.join(', ')}</span>
                              ) : (
                                <span className="text-red-500 font-bold">{item.details}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {item.status === 'Pending' ? (
                            <>
                              <Button size="sm" variant="outline" className="rounded-lg font-bold">Review</Button>
                              <Button size="sm" className="rounded-lg font-bold" onClick={() => handleVerify(item.user)}>Approve</Button>
                            </>
                          ) : (
                            <Button size="sm" variant="destructive" className="rounded-lg font-bold">Investigate</Button>
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
                  <CardTitle className="text-lg font-black">Escrow Health</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                   <div className="p-4 bg-muted rounded-xl flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">In Escrow</div>
                      <div className="text-xl font-black">Ksh 1.2M</div>
                    </div>
                    <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                      <CreditCard size={20} />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                     <div className="flex justify-between items-center text-sm font-bold">
                       <span>Payout Success Rate</span>
                       <span className="text-green-500">99.8%</span>
                     </div>
                     <Progress value={99.8} className="h-2 bg-green-100" />
                  </div>
                </CardContent>
               </Card>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
             <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-card p-6">
                  <CardTitle className="text-xl font-black">Subscription Billing</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {[
                      { partner: 'Nairobi Car Hire Ltd', plan: 'Enterprise Fleet', amount: 'Ksh 15,000', status: 'Paid', date: 'Today' },
                      { partner: 'K-Star Tours', plan: 'Premium Listing', amount: 'Ksh 5,000', status: 'Due', date: 'In 2 days' },
                    ].map((sub, i) => (
                      <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/30">
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-primary/10 text-primary rounded-xl">
                            <RefreshCw size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold">{sub.partner}</h4>
                            <div className="text-xs text-muted-foreground font-medium">{sub.plan} • {sub.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="font-black">{sub.amount}</div>
                           <Badge className={sub.status === 'Paid' ? 'bg-green-500' : 'bg-amber-500'}>{sub.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="disputes" className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { id: 'DIS-1024', user: 'Evans Omondi', reason: 'Vehicle mismatch', priority: 'High', date: '4h ago' },
                 { id: 'DIS-1025', user: 'James G.', reason: 'Late dropoff fee', priority: 'Medium', date: '12h ago' },
               ].map(dispute => (
                 <Card key={dispute.id} className="border-none shadow-xl rounded-2xl overflow-hidden">
                   <CardContent className="p-6">
                     <div className="flex justify-between items-start mb-4">
                       <Badge variant="destructive" className="font-bold">{dispute.priority} Priority</Badge>
                       <span className="text-[10px] font-bold text-muted-foreground uppercase">{dispute.id}</span>
                     </div>
                     <h4 className="font-black mb-1">{dispute.user}</h4>
                     <p className="text-sm text-muted-foreground mb-4">{dispute.reason}</p>
                     <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-xs font-bold text-muted-foreground">{dispute.date}</span>
                        <Button size="sm" className="rounded-lg font-bold">Investigate</Button>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Growth Report', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
                { title: 'Insurance Audit', icon: ShieldCheck, color: 'bg-blue-100 text-blue-600' },
                { title: 'Fraud Analysis', icon: AlertCircle, color: 'bg-red-100 text-red-600' },
              ].map((report, i) => (
                <Card key={i} className="border-none shadow-xl rounded-2xl p-6 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className={`p-4 rounded-2xl w-fit mb-4 ${report.color}`}>
                    <report.icon size={24} />
                  </div>
                  <h4 className="font-black text-lg mb-2">{report.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium mb-4">Generated weekly. Last update: May 24, 2024.</p>
                  <Button variant="outline" size="sm" className="w-full rounded-xl font-bold">Download PDF</Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;