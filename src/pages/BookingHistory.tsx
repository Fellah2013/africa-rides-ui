import React from 'react';
import { 
  History, Car, Calendar, MapPin, 
  MessageCircle, Star, ChevronRight,
  ShieldCheck, Clock, CheckCircle2, PhoneCall
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

const BookingHistory = () => {
  const [bookings, setBookings] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('bookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  const handleSOS = () => {
    toast.error('Emergency Support Triggered!', {
      description: 'The owner and RideLink support have been notified of your location.',
      duration: 5000,
    });
  };

  return (
    <div className="flex-1 bg-muted/30 pb-20 pt-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Booking History</h1>
            <p className="text-muted-foreground">Keep track of your rides and upcoming adventures.</p>
          </div>
          <Button variant="destructive" className="rounded-xl font-bold h-12 shadow-lg animate-pulse" onClick={handleSOS}>
            <PhoneCall size={20} className="mr-2" />
            Emergency SOS
          </Button>
        </div>

        {bookings.length === 0 ? (
          <Card className="border-none shadow-xl rounded-2xl py-20 text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
                <History size={40} />
              </div>
              <h2 className="text-2xl font-black">No bookings yet</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">You haven't rented any vehicles yet. Start exploring the marketplace to find your perfect ride.</p>
              <Button className="mt-4 rounded-xl font-bold h-12 px-8" asChild>
                <a href="/">Browse Vehicles</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {bookings.reverse().map((booking, i) => (
                <Card key={i} className="border-none shadow-xl rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden">
                      <img src={booking.image} className="w-full h-full object-cover" alt={booking.name} />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Badge className="mb-2 bg-secondary/10 text-secondary border-secondary/20 font-bold uppercase tracking-widest text-[10px]">
                            {booking.status}
                          </Badge>
                          <h3 className="text-xl font-black">{booking.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mt-1">
                            <MapPin size={14} className="text-primary" />
                            {booking.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-black">Ksh {booking.price.toLocaleString()}</div>
                          <div className="text-[10px] text-muted-foreground font-bold uppercase">per day</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-y my-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-muted-foreground" />
                          <div className="text-xs font-bold">12 Jun - 15 Jun</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-secondary" />
                          <div className="text-xs font-bold">Escrow Protected</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                           <Button size="sm" variant="ghost" className="rounded-full bg-muted font-bold text-xs h-9">
                             <MessageCircle size={14} className="mr-1.5" />
                             Chat Owner
                           </Button>
                        </div>
                        <Button variant="outline" className="rounded-lg font-bold h-9">
                          View Receipt
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1 space-y-6">
               <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-primary p-6 text-primary-foreground">
                  <CardTitle className="text-lg font-black">Live GPS Support</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted relative">
                    <img 
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover grayscale opacity-50"
                      alt="Map"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-12 h-12 bg-primary rounded-full animate-ping opacity-25" />
                        <div className="w-6 h-6 bg-primary rounded-full border-2 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                           <Car size={12} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <Clock size={16} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase">Estimated Arrival</div>
                          <div className="text-sm font-bold">In 15 minutes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold mb-4">Pickup Point</h4>
                    <div className="flex gap-3 mb-6">
                      <MapPin className="text-primary shrink-0" size={20} />
                      <p className="text-sm font-medium">Jomo Kenyatta International Airport, Terminal 1A, Nairobi</p>
                    </div>
                    <Button className="w-full rounded-xl font-bold h-12">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <Star size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold">Rate your experiences</h4>
                      <p className="text-xs text-muted-foreground font-medium mt-1">Your reviews help us maintain the quality of our African fleet.</p>
                    </div>
                    <Button variant="outline" className="w-full rounded-xl font-bold">Rate Rides</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;