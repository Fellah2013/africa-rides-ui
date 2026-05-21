import React from 'react';
import { User, Mail, Phone, MapPin, ShieldCheck, CreditCard, LogOut, Bell, Settings, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';

const UserProfile = () => {
  return (
    <div className="flex-1 bg-muted/30 pb-20 pt-8">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-black tracking-tight mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
              <div className="h-24 bg-primary" />
              <CardContent className="px-6 pb-8 pt-0 flex flex-col items-center -mt-12">
                <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-lg mb-4">
                  <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center text-primary">
                    <User size={48} />
                  </div>
                </div>
                <h2 className="text-xl font-black">Jane Karimi</h2>
                <p className="text-sm text-muted-foreground font-medium mb-4">Member since Jan 2024</p>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold uppercase tracking-widest text-[10px]">
                  Verified Traveler
                </Badge>
                
                <div className="w-full grid grid-cols-2 gap-4 mt-8 pt-8 border-t">
                  <div className="text-center">
                    <div className="text-xl font-black">12</div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase">Rides</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black">4.9</div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <nav className="space-y-2">
              {[
                { label: 'Account Settings', icon: Settings },
                { label: 'Notifications', icon: Bell, badge: '3' },
                { label: 'Payment Methods', icon: CreditCard },
                { label: 'RideLink Rewards', icon: Award },
                { label: 'Logout', icon: LogOut, variant: 'destructive' },
              ].map((item, i) => (
                <Button 
                  key={i} 
                  variant="ghost" 
                  className={`w-full justify-start rounded-xl h-12 font-bold ${item.variant === 'destructive' ? 'text-red-500 hover:text-red-600 hover:bg-red-50' : ''}`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                  {item.badge && <Badge className="ml-auto bg-primary text-white">{item.badge}</Badge>}
                </Button>
              ))}
            </nav>
          </div>

          {/* Details Area */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-none shadow-xl rounded-3xl">
              <CardHeader className="p-8 pb-0">
                <CardTitle className="text-xl font-black">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                    <Input defaultValue="Jane Karimi" className="rounded-xl border-muted bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                    <Input defaultValue="jane.k@example.com" className="rounded-xl border-muted bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Phone (M-Pesa)</label>
                    <Input defaultValue="+254 712 345 678" className="rounded-xl border-muted bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Location</label>
                    <Input defaultValue="Westlands, Nairobi" className="rounded-xl border-muted bg-muted/20" />
                  </div>
                </div>
                <Button className="rounded-xl font-bold h-12 px-8">Save Changes</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl">
              <CardHeader className="p-8 pb-0">
                <CardTitle className="text-xl font-black">Identity Verification</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex gap-4 items-start p-6 bg-secondary/5 rounded-2xl border border-secondary/10 mb-6">
                  <ShieldCheck size={32} className="text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Government ID Verified</h4>
                    <p className="text-sm text-muted-foreground font-medium">Your identity was verified on Feb 12, 2024. You have full access to all vehicle categories including luxury rentals.</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl font-bold">Manage Documents</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;