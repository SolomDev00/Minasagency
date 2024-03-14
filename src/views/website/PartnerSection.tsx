import BadrImg from "../../assets/partners/badr.png";
import EgyptairImg from "../../assets/partners/egyptair.svg";
import FlydubaiImg from "../../assets/partners/flydubai.png";
import FlynasImg from "../../assets/partners/flynas.png";
import GulfairImg from "../../assets/partners/gulfair.png";
import NileairImg from "../../assets/partners/nileair.png";
import QaterImg from "../../assets/partners/qater.png";
import SaudiaImg from "../../assets/partners/saudia.png";
import SudanalwaysImg from "../../assets/partners/sudanalways.png";
import TarcoImg from "../../assets/partners/tarco.png";

const PartnerSection = () => {
  return (
    <section id="category" className="container z-50">
      <div className="flex flex-row-reverse justify-between items-center mt-10 mb-[-20px]">
        <h3 className="text-xl font-semibold">شركاء النجاح</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-row items-center gap-6">
          <img
            className="w-20 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={BadrImg}
            alt="Badr"
          />
          <img
            className="w-24 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={EgyptairImg}
            alt="Egyptair"
          />
          <img
            className="w-24 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={FlydubaiImg}
            alt="Flydubai"
          />
          <img
            className="w-24 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={FlynasImg}
            alt="Flydubai"
          />
          <img
            className="w-24 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={NileairImg}
            alt="Flydubai"
          />
          <img
            className="w-28 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={QaterImg}
            alt="Flydubai"
          />
          <img
            className="w-28 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={SaudiaImg}
            alt="Flydubai"
          />
          <img
            className="w-20 mb-8 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={GulfairImg}
            alt="Flydubai"
          />
        </div>
        <div className="flex flex-row items-center gap-6 mt-[-50px]">
          <img
            className="w-20 grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={TarcoImg}
            alt="Flydubai"
          />
          <img
            className="w-[150px] grayscale hover:grayscale-0 cursor-pointer duration-300"
            src={SudanalwaysImg}
            alt="Flydubai"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
