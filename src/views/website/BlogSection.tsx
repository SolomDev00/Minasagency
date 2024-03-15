import SliderImg from "../../assets/airplane.jpg";
import LogoImg from "../../assets/logo.png";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrow: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="blog" className="container">
      <div className="flex flex-row-reverse justify-between items-center mt-6 mb-5 max-sm:mt-8">
        <h3 className="text-xl max-sm:text-sm font-semibold">
          عروض اليوم مع ميناس
        </h3>
        <Link
          to={"/blogs"}
          className="flex items-center justify-between gap-1 text-lg max-sm:text-sm text-primary"
        >
          <LuArrowLeftFromLine className="w-4 max-sm:w-3" /> مشاهدة جميع العروض
        </Link>
      </div>
      <Slider {...settings}>
        <div className="blogBox">
          <Link to={"/"} className="bg-white/90 rounded-lg shadow-lg pb-3">
            <img
              className="rounded-t-lg w-full h-[185px]"
              src={SliderImg}
              alt="slider"
              loading="lazy"
            />

            <div className="pt-3 px-2">
              <h4 className="text-sm font-medium text-right pb-3">
                مزودي الخدمات والمستثمرين في مكان واحد: دليلك إلى برنامج ميزا
                وخدماته للمستثمرين
              </h4>
              <div className="flex flex-row-reverse items-center">
                <img className="w-6 h-6" src={LogoImg} alt="logo" />
                <p className="text-xs">عروض ميناس</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="blogBox">
          <Link to={"/"} className="bg-white/90 rounded-lg shadow-lg pb-3">
            <img
              className="rounded-t-lg w-full h-[185px]"
              src={SliderImg}
              alt="slider"
              loading="lazy"
            />
            <div className="pt-3 px-2">
              <h4 className="text-sm font-medium text-right pb-3">
                مزودي الخدمات والمستثمرين في مكان واحد: دليلك إلى برنامج ميزا
                وخدماته للمستثمرين
              </h4>
              <div className="flex flex-row-reverse items-center">
                <img className="w-6 h-6" src={LogoImg} alt="logo" />
                <p className="text-xs">عروض ميناس</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="blogBox">
          <Link to={"/"} className="bg-white/90 rounded-lg shadow-lg pb-3">
            <img
              className="rounded-t-lg w-full h-[185px]"
              src={SliderImg}
              alt="slider"
              loading="lazy"
            />
            <div className="pt-3 px-2">
              <h4 className="text-sm font-medium text-right pb-3">
                مزودي الخدمات والمستثمرين في مكان واحد: دليلك إلى برنامج ميزا
                وخدماته للمستثمرين
              </h4>
              <div className="flex flex-row-reverse items-center">
                <img className="w-6 h-6" src={LogoImg} alt="logo" />
                <p className="text-xs">عروض ميناس</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="blogBox">
          <Link to={"/"} className="bg-white/90 rounded-lg shadow-lg pb-3">
            <img
              className="rounded-t-lg w-full h-[185px]"
              src={SliderImg}
              alt="slider"
              loading="lazy"
            />
            <div className="pt-3 px-2">
              <h4 className="text-sm font-medium text-right pb-3">
                مزودي الخدمات والمستثمرين في مكان واحد: دليلك إلى برنامج ميزا
                وخدماته للمستثمرين
              </h4>
              <div className="flex flex-row-reverse items-center">
                <img className="w-6 h-6" src={LogoImg} alt="logo" />
                <p className="text-xs">عروض ميناس</p>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
    </section>
  );
};

export default BlogSection;
