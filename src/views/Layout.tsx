import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import HomeLoading from "../components/loading/home";
import Footer from "../components/footer";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="root-layout">
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <HomeLoading />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow container">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
