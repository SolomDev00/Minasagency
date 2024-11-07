import { Link } from "react-router-dom";
import { Image } from 'primereact/image';
import Slider from "react-slick";
import DHBImg from "../../assets/places/DHB.webp";
import ASWImg from "../../assets/places/ASW.webp";
import HBEImg from "../../assets/places/HBE.webp";
import RMFImg from "../../assets/places/RMF.webp";
import SNHImg from "../../assets/places/SPX.webp";
import SSHImg from "../../assets/places/SSH.webp";
import HRGImg from "../../assets/places/HRG.webp";

const HotalSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1.3,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section id="hotal" className="container relative z-10 max-sm:mt-8">
      <div className="flex flex-row-reverse justify-between items-center mt-10 mb-5">
        <h3 className="text-xl max-sm:text-sm font-semibold">
          فنادق في أفضل المدن
        </h3>
      </div>
      <Slider className="sliderHotal" {...settings}>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={SSHImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">شرم الشيخ</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={SNHImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">الجيزة</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={DHBImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">دهب</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={ASWImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">أسوان</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={HBEImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">الإسكندرية</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={RMFImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">القاهرة</h3>
            </div>
          </Link>
        </div>
        <div className="hotalBox">
          <Link to={"/"} className="bg-white/90 pb-3 h-[220px]">
            <img
              className="rounded-lg h-[220px] w-full"
              src={HRGImg}
              alt="slider"
              loading="lazy"
            />
            <div className="relative w-full">
              <h3 className="placesText w-full">الغردقة</h3>
            </div>
          </Link>
        </div>
      </Slider>
    </section>
  );
};

export default HotalSection;
