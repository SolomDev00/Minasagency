import BlogSection from "./website/BlogSection";
import CategorySection from "./website/CategorySection";
import FeatureSection from "./website/FeatureSection";
import HotalSection from "./website/HotalSection";
import LandingSection from "./website/LandingSection";
import PartnerSection from "./website/PartnerSection";
import PaymentSection from "./website/PaymentSection";
import TicketSection from "./website/TicketSection";

const HomePage = () => {
  return (
    <div className="w-full mb-8 max-sm:overflow-x-hidden">
      <LandingSection />
      <TicketSection />
      <FeatureSection />
      <BlogSection />
      <HotalSection />
      <CategorySection />
      <PartnerSection />
      <PaymentSection />
    </div>
  );
};

export default HomePage;
