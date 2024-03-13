import LandingSection from "./website/LandingSection";
import TicketSection from "./website/TicketSection";

const HomePage = () => {
  return (
    <div className="w-full mb-8 max-sm:overflow-x-hidden">
      <LandingSection />
      <TicketSection />
    </div>
  );
};

export default HomePage;
