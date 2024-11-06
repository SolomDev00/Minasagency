import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import RootLayout from "../views/Layout";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";
import AboutUsPage from "../views/pages/AboutUs";
import SupportPage from "../views/pages/Support";
import AffiliateProgramPage from "../views/pages/Affiliate-Program";
import TermsPage from "../views/pages/Terms-of-Services";
import PrivacyPage from "../views/pages/Privacy-Policy";
import AdvertisePage from "../views/pages/Advertise";
import HoteliersPage from "../views/pages/Hoteliers";
import BookPage from "../views/pages/Book-on-Minas";
import ServicesPage from "../views/pages/Our-Services";
import FlightsPage from "../views/pages/Flights";

const routers = createHashRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="affiliate-program" element={<AffiliateProgramPage />} />
        <Route path="terms-of-services" element={<TermsPage />} />
        <Route path="privacy-policy" element={<PrivacyPage />} />
        <Route path="advertise" element={<AdvertisePage />} />
        <Route path="hoteliers" element={<HoteliersPage />} />
        <Route path="book-on-minas" element={<BookPage />} />
        <Route path="our-services" element={<ServicesPage />} />
        <Route path="flights" element={<FlightsPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routers;
