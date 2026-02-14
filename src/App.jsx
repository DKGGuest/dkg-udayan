import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Artisans from './pages/Artisans';
import ArtisanDetail from './pages/ArtisanDetail';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import WomenEmpowerment from './pages/WomenEmpowerment';
import ArtPreservation from './pages/ArtPreservation';
import Workshops from './pages/Workshops';
import MarketAccess from './pages/MarketAccess';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Gallery from './pages/Gallery';
import Partnerships from './pages/Partnerships';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artisans" element={<Artisans />} />
              <Route path="/artisans/:id" element={<ArtisanDetail />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/:id" element={<ProductDetail />} />
              <Route path="/women-empowerment" element={<WomenEmpowerment />} />
              <Route path="/preservation" element={<ArtPreservation />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/market-access" element={<MarketAccess />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
