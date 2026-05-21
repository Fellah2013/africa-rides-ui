import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Filter, Star, Shield, Zap, Users, Crown, ChevronRight, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';

const VEHICLES = [
  {
    id: '1',
    name: 'Toyota Land Cruiser Prado',
    type: 'SUV',
    price: 12000,
    rating: 4.8,
    reviews: 124,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/suv-listing-b53632a8-1779283369913.webp',
    features: ['Chauffeur Available', '4WD', 'Air Con'],
    owner: 'Safari Tour Co.',
    location: 'Nairobi, Kenya',
    featured: true
  },
  {
    id: '2',
    name: 'Mercedes Benz S-Class',
    type: 'Luxury',
    price: 25000,
    rating: 5.0,
    reviews: 42,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/luxury-listing-1-8ef09746-1779283369164.webp',
    features: ['Chauffeur Only', 'VIP Support', 'Leather Interior'],
    owner: 'Platinum Hire',
    location: 'Johannesburg, SA',
    featured: true
  },
  {
    id: '3',
    name: 'Toyota Noah Executive',
    type: 'Van',
    price: 8500,
    rating: 4.6,
    reviews: 89,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/shuttle-listing-d1f604f2-1779283370707.webp',
    features: ['8-Seater', 'Self-drive', 'Spacious'],
    owner: 'Mombasa SACCO',
    location: 'Mombasa, Kenya'
  },
  {
    id: '4',
    name: 'Tesla Model 3',
    type: 'Sedan',
    price: 15000,
    rating: 4.9,
    reviews: 15,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/sedan-listing-aa41765a-1779283369076.webp',
    features: ['Electric', 'Autopilot', 'Self-drive'],
    owner: 'EcoDrive Africa',
    location: 'Kigali, Rwanda'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/hero-bg-1051c4c4-1779283369881.webp" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 py-1.5 px-4 bg-primary/20 text-primary border-primary/50 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
              The Leading Mobility Marketplace in Africa
            </Badge>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
              RideLink <span className="text-primary italic">Africa</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-medium">
              Connecting car owners, SACCOs, and tour operators with Africa's travelers. 
              Safe, verified, and ready for adventure.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-5xl mx-auto glass p-3 rounded-3xl md:rounded-[2.5rem] shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="flex items-center gap-2 px-6 py-4 bg-muted/50 rounded-2xl md:rounded-l-[2rem]">
                <MapPin className="text-primary" size={24} />
                <div className="text-left flex-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                  <Input 
                    placeholder="Where to?" 
                    className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground/50 font-bold" 
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 px-6 py-4 bg-muted/50 rounded-2xl md:border-l border-white/10">
                <Calendar className="text-primary" size={24} />
                <div className="text-left flex-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Date</p>
                  <Input 
                    type="date"
                    className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-muted-foreground font-bold" 
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 px-6 py-4 bg-muted/50 rounded-2xl md:border-l border-white/10">
                <Users className="text-primary" size={24} />
                <div className="text-left flex-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Mode</p>
                  <select className="bg-transparent border-none outline-none w-full text-sm font-bold text-muted-foreground">
                    <option>Self Drive</option>
                    <option>With Chauffeur</option>
                  </select>
                </div>
              </div>
              <Button className="h-full rounded-2xl md:rounded-r-[2rem] text-xl font-black shadow-lg shadow-primary/30">
                <Search size={24} className="mr-2" />
                Find Ride
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Partnerships */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="african-pattern absolute inset-0 pointer-events-none" />
        <div className="container px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-3">
                <Crown size={14} />
                Featured Listings
              </div>
              <h2 className="text-4xl font-extrabold mb-4">Africa's <span className="text-primary">Premium Fleet</span></h2>
              <p className="text-muted-foreground max-w-xl">Curated vehicles from our most trusted partners, verified for safety and comfort.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-xl font-bold">Local SACCOs</Button>
              <Button variant="outline" className="rounded-xl font-bold">Tour Companies</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VEHICLES.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group cursor-pointer overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl relative"
                  onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                >
                  {vehicle.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-primary/90 text-white backdrop-blur-md border-none font-black px-3 py-1 flex items-center gap-1 shadow-lg">
                        <Award size={12} />
                        FEATURED
                      </Badge>
                    </div>
                  )}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-white border border-white/20">
                        <Star size={14} className="fill-primary text-primary" />
                        <span className="text-xs font-bold">{vehicle.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-1 text-[10px] font-black text-primary uppercase tracking-widest">
                      {vehicle.owner}
                    </div>
                    <h3 className="text-xl font-black mb-2 line-clamp-1">{vehicle.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs font-medium mb-4">
                      <MapPin size={14} />
                      {vehicle.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.slice(0, 2).map(f => (
                        <span key={f} className="text-[10px] font-bold bg-muted px-2.5 py-1 rounded-full text-muted-foreground uppercase tracking-tight">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-black">Ksh {vehicle.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground font-bold"> / day</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Insurance Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
               <Badge className="bg-secondary/10 text-secondary border-none font-black mb-4">RIDE WITH CONFIDENCE</Badge>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Every mile is <span className="text-secondary italic">protected.</span></h2>
               <div className="space-y-6">
                 {[
                   { icon: Shield, title: 'Insurance Partnerships', desc: 'Comprehensive cover from leading African insurers included in every rental.' },
                   { icon: Zap, title: 'M-Pesa Escrow Payments', desc: 'Your money is only released to the owner after you start your ride.' },
                   { icon: Users, title: '24/7 Roadside Assistance', desc: 'Access our emergency SOS network anytime, anywhere across the continent.' },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-primary shrink-0">
                       <item.icon size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                       <p className="text-muted-foreground text-sm font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div className="relative">
               <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1557199-b489-4827-b891-869024173f7f/chauffeur-service-55caf180-1779283369223.webp" 
                className="rounded-[3rem] shadow-2xl"
                alt="Protection"
               />
               <div className="absolute -bottom-10 -left-10 bg-white dark:bg-card p-6 rounded-3xl shadow-2xl border border-border hidden md:block max-w-xs">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <Shield size={20} />
                    </div>
                    <div className="font-black text-sm">Verified Security</div>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Over 50,000 rides completed with 99.9% safety record.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Own a vehicle? <br className="md:hidden" /> <span className="text-primary italic">Earn extra cash.</span></h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 font-medium">
            List your car, SUV, or tour van on RideLink Africa. Join the 5,000+ partners earning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-black px-12 rounded-2xl h-16 text-lg" onClick={() => navigate('/fleet')}>
              Become a Fleet Owner
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary font-black px-12 rounded-2xl h-16 text-lg">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;