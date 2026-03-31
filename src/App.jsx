import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

// Pages
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import SuppliesListing from './pages/SuppliesListing';
import ProductDetail from './pages/ProductDetail';
import PetAdoption from './pages/PetAdoption';
import PetDetail from './pages/PetDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/supplies" element={<SuppliesListing />} />
          <Route path="/adopt" element={<PetAdoption />} />
          <Route path="/adopt/:id" element={<PetDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
