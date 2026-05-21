import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, MapPin, Calendar, ShieldCheck, ChevronRight, 
  MessageCircle, Phone, Info, CheckCircle, CreditCard,
  User, Gauge, Fuel, Snowflake, UserCheck, AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';

const VEHICLES = [
  {
    id: '1',
    name: 'Toyota Land Cruiser Prado',
    type: 'SUV',
    price: 12000,
    rating: 4.8,
    reviews: 124,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/suv-listing-b53632a8-1779283369913.webp',
    features: ['4WD', 'Air Con', '7 Seats', 'Diesel', 'Automatic'],
    owner: 'Safari Tour Co.',
    ownerRating: 4.9,
    location: 'Nairobi, Kenya',
    description: 'Perfect for long-distance travel and off-road safaris. This Prado is well-maintained, fuel-efficient for its size, and comes with a professional driver if requested.'
  },
  {
    id: '2',
    name: 'Mercedes Benz S-Class',
    type: 'Luxury',
    price: 25000,
    rating: 5.0,
    reviews: 42,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/luxury-listing-1-8ef09746-1779283369164.webp',
    features: ['Leather Seats', 'Sunroof', 'Massage Seats', 'Hybrid', 'Automatic'],
    owner: 'Platinum Hire',
    ownerRating: 5.0,
    location: 'Johannesburg, SA',
    description: 'Ultimate luxury for business trips or weddings. Includes professional chauffeur, bottled water, and onboard WiFi.'
  },
  {
    id: '3',
    name: 'Toyota Noah Executive',
    type: 'Van',
    price: 8500,
    rating: 4.6,
    reviews: 89,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/shuttle-listing-d1f604f2-1779283370707.webp',
    features: ['8-Seater', 'Dual AC', 'Large Trunk', 'Petrol', 'Automatic'],
    owner: 'Mombasa SACCO',
    ownerRating: 4.5,
    location: 'Mombasa, Kenya',
    description: 'Spacious and comfortable for group travel. Ideal for airport transfers or family outings along the coast.'
  },
  {
    id: '4',
    name: 'Tesla Model 3',
    type: 'Sedan',
    price: 15000,
    rating: 4.9,
    reviews: 15,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/sedan-listing-aa41765a-1779283369076.webp',
    features: ['Autopilot', 'Glass Roof', 'High Performance', 'Electric', 'Automatic'],
    owner: 'EcoDrive Africa',
    ownerRating: 4.8,
    location: 'Kigali, Rwanda',
    description: 'Experience the future of mobility in the heart of Africa. Silent, fast, and eco-friendly.'
  }
];

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = VEHICLES.find(v => v.id === id);

  if (!vehicle) return <div>Vehicle not found</div>;

  const handleBooking = () => {
    toast.success('M-Pesa request sent to your phone!', {
      description: 'Please enter your PIN to complete the booking.',
      duration: 5000,
    });
    
    // Simulate booking save
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      ...vehicle,
      bookingId: `RL-${Math.floor(Math.random() * 100000)}`,
      status: 'Confirmed',
      date: new Date().toLocaleDateString(),
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setTimeout(() => {
      navigate('/bookings');
    }, 2000);
  };

  return (
    <div className="flex-1 bg-muted/30 pb-20">
      {/* Gallery / Cover */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 w-full">
          <div className="container px-4 flex justify-between items-end">
            <div>
              <Badge className="bg-primary hover:bg-primary text-primary-foreground mb-4">
                {vehicle.type}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{vehicle.name}</h1>
              <div className="flex items-center gap-4 text-white/90 mt-2">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-primary text-primary" />
                  <span className="font-bold">{vehicle.rating} ({vehicle.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{vehicle.location}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md text-white border-white/20">
                <MessageCircle size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md text-white border-white/20">
                <Phone size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-2xl border-none shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { icon: Gauge, label: 'Mileage', value: 'Unlimited' },
                    { icon: Fuel, label: 'Fuel', value: vehicle.features.includes('Electric') ? 'Electric' : 'Diesel' },
                    { icon: User, label: 'Capacity', value: '5 Seats' },
                    { icon: Snowflake, label: 'AC', value: 'Yes' },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase font-bold tracking-widest">
                        <spec.icon size={14} className="text-primary" />
                        {spec.label}
                      </div>
                      <div className="text-sm font-black">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <h3 className="text-xl font-bold mb-4">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-4">Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {vehicle.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle size={18} className="text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-none shadow-xl overflow-hidden">
              <Tabs defaultValue="reviews" className="w-full">
                <TabsList className="w-full justify-start rounded-none h-14 bg-muted/50 border-b">
                  <TabsTrigger value="reviews" className="h-full px-8 font-bold data-[state=active]:bg-background">Reviews</TabsTrigger>
                  <TabsTrigger value="owner" className="h-full px-8 font-bold data-[state=active]:bg-background">Owner Info</TabsTrigger>
                  <TabsTrigger value="policy" className="h-full px-8 font-bold data-[state=active]:bg-background">Policies</TabsTrigger>
                </TabsList>
                <CardContent className="p-8">
                  <TabsContent value="reviews">
                    <div className="space-y-6">
                      {[1, 2].map(i => (
                        <div key={i} className="flex gap-4 pb-6 border-b last:border-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">JD</div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-bold">John Doe</h4>
                                <div className="flex gap-0.5 mt-1">
                                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-primary text-primary" />)}
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground">2 weeks ago</span>
                            </div>
                            <p className="text-sm text-muted-foreground italic">"Exceptional service! The car was in perfect condition and the chauffeur was very professional. Highly recommended for business trips."</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="owner">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center text-primary">
                        <UserCheck size={40} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black">{vehicle.owner}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Star size={16} className="fill-primary text-primary" />
                          <span className="font-bold">{vehicle.ownerRating} Owner Rating</span>
                        </div>
                        <Badge className="mt-3 bg-secondary/10 text-secondary border-secondary/20 font-bold uppercase tracking-widest text-[10px]">Verified Partner</Badge>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="policy">
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <Info size={18} className="text-primary shrink-0" />
                        <span className="text-sm">Cancel up to 24 hours in advance for a full refund.</span>
                      </li>
                      <li className="flex gap-3">
                        <AlertTriangle size={18} className="text-primary shrink-0" />
                        <span className="text-sm">Security deposit of Ksh 5,000 required at pickup (Fully Refundable).</span>
                      </li>
                    </ul>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 rounded-2xl border-none shadow-2xl overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black">Ksh {vehicle.price.toLocaleString()}</span>
                  <span className="text-sm opacity-80 font-bold mb-1">/ day</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Rental Period</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-muted p-3 rounded-xl border border-border">
                        <div className="text-[10px] font-bold text-muted-foreground uppercase">Pickup</div>
                        <div className="text-sm font-bold">12 Jun, 2024</div>
                      </div>
                      <div className="bg-muted p-3 rounded-xl border border-border">
                        <div className="text-[10px] font-bold text-muted-foreground uppercase">Dropoff</div>
                        <div className="text-sm font-bold">15 Jun, 2024</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Service Type</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 rounded-xl font-bold border-primary text-primary bg-primary/5">Self-Drive</Button>
                      <Button variant="outline" className="flex-1 rounded-xl font-bold">Chauffeur</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ksh {vehicle.price.toLocaleString()} x 3 days</span>
                    <span className="font-bold">Ksh {(vehicle.price * 3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee (Escrow)</span>
                    <span className="font-bold">Ksh 1,500</span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t">
                    <span className="font-black">Total</span>
                    <span className="font-black text-primary">Ksh {(vehicle.price * 3 + 1500).toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 rounded-xl text-lg font-black shadow-lg shadow-primary/30"
                  onClick={handleBooking}
                >
                  <CreditCard size={20} className="mr-2" />
                  Book via M-Pesa
                </Button>

                <p className="text-[10px] text-center text-muted-foreground font-medium uppercase tracking-wider">
                  Funds will be held in Escrow until completion
                </p>
              </CardContent>
            </Card>

            <div className="mt-6 flex flex-col gap-4">
               <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <ShieldCheck size={24} className="text-secondary" />
                  <div>
                    <h5 className="text-sm font-bold">RideLink Escrow Guarantee</h5>
                    <p className="text-[11px] text-muted-foreground font-medium">Money back if vehicle doesn't match description.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;