import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, User, Settings, ShieldCheck, History, Menu, X, Sun, Moon, PhoneCall, MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);

  const navigation = [
    { name: 'Marketplace', href: '/', icon: Car },
    { name: 'My Bookings', href: '/bookings', icon: History },
    { name: 'Fleet Owner', href: '/fleet', icon: Settings },
    { name: 'Admin', href: '/admin', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground transform group-hover:rotate-12 transition-transform">
              <Car size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-tight">RideLink</span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">Africa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="destructive" size="sm" className="hidden sm:flex items-center gap-2 font-bold animate-pulse">
              <PhoneCall size={16} />
              <span>SOS</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/profile">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/bookings">My Bookings</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 text-lg font-medium p-3 rounded-lg hover:bg-muted transition-colors ${
                        location.pathname === item.href ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      <item.icon size={20} />
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-auto pt-8 border-t">
                    <Button variant="destructive" className="w-full flex items-center gap-2 font-bold">
                      <PhoneCall size={18} />
                      Emergency Support
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Live Chat Simulation */}
      <div className="fixed bottom-6 right-6 z-40">
        <Sheet open={chatOpen} onOpenChange={setChatOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl shadow-primary/40 animate-bounce">
              <MessageCircle size={28} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col p-0">
            <SheetHeader className="p-6 bg-primary text-primary-foreground">
              <SheetTitle className="text-white flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                RideLink Support
              </SheetTitle>
              <p className="text-xs opacity-80">Our team usually replies in minutes.</p>
            </SheetHeader>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                  Hello! How can we help you with your RideLink adventure today?
                </div>
                <div className="bg-primary/10 p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%] ml-auto">
                  I'm looking for a luxury SUV in Nairobi for a wedding next week.
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                  Excellent choice! We have 3 Mercedes S-Class and 5 Range Rovers available for those dates. Would you like to see them?
                </div>
              </div>
            </ScrollArea>
            <div className="p-4 border-t flex gap-2">
              <Input placeholder="Type a message..." className="rounded-xl" />
              <Button size="icon" className="rounded-xl shrink-0">
                <Send size={18} />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <Car size={20} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-xl tracking-tight">RideLink Africa</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Connecting Africa's mobility ecosystem. From individual car owners to SACCOs, 
                we provide the most trusted vehicle rental marketplace on the continent.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                  <PhoneCall size={18} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/">Browse Vehicles</Link></li>
                <li><Link to="/fleet">List your Vehicle</Link></li>
                <li><Link to="/bookings">Rental History</Link></li>
                <li><Link to="/admin">Partner Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#">Safety Guidelines</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} RideLink Africa. All rights reserved. Built for the African Continent.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;