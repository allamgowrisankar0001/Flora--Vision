
import './App.css';
import HeroSection from './component/HeroSection';
import TrendyPlantsSection from './component/TrendyPlantsSection';
import TopSellingSection from './component/TopSellingSection';
import CustomerReviewSection from './component/CustomerReviewSection';
import BestO2Section from './component/BestO2Section';
import FooterSection from './component/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-[#1B2316] overflow-x-hidden">
      <HeroSection />
      <TopSellingSection />
      <CustomerReviewSection />
      <BestO2Section />
      <FooterSection />
    </div>
  );
}

export default App;
