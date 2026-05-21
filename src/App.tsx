import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import VehicleDetails from './pages/VehicleDetails';
import FleetDashboard from './pages/FleetDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BookingHistory from './pages/BookingHistory';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="/fleet" element={<FleetDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/bookings" element={<BookingHistory />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" richColors />
      </Router>
    </ThemeProvider>
  );
}

export default App;