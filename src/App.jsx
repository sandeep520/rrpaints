import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AchievementsPage from './pages/AchievementsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A9203E] selection:text-white flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-[104px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
