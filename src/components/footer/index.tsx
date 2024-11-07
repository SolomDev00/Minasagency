import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import "./Footer.style.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#212d5d] pb-5" dir="rtl">
      <div className="container">
        <div className="flex max-sm:gap-3 pt-10">
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg max-sm:text-base text-white font-medium">
              الشركة
            </h4>
            <ul className="mt-5">
              <Link to="/about-us">
                <li className="text-base max-sm:text-xs text-white">عن ميناس</li>
              </Link>
              <li className="text-base max-sm:text-xs text-white">الصحافة</li>
              <li className="text-base max-sm:text-xs text-white">الوظائف</li>
              <Link to="/support">
                <li className="text-base max-sm:text-xs text-white">اتصل بنا</li>
              </Link>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg max-sm:text-base text-white font-medium">
              اعرف المزيد
            </h4>
            <ul className="mt-5">
              <Link to="/book-on-minas">
                <li className="text-base max-sm:text-xs text-white">
                  احجز مع ميناس
                </li>
              </Link>
              <Link to="/affiliate-program">
                <li className="text-base max-sm:text-xs text-white">الشركاء</li>
              </Link>
              <Link to="/advertise">
                <li className="text-base max-sm:text-xs text-white">للإعلان</li>
              </Link>
              <Link to="/hoteliers">
                <li className="text-base max-sm:text-xs text-white">
                  أصحاب الفنادق
                </li>
              </Link>
              <Link to="/privacy-policy">
                <li className="text-base max-sm:text-xs text-white">
                  سياسة الخصوصية
                </li>
              </Link>
              <Link to="/terms-of-services">
                <li className="text-base max-sm:text-xs text-white">
                  الشروط و الأحكام
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg max-sm:text-base text-white font-medium">
              بحث
            </h4>
            <ul className="mt-5">
              <li className="text-base max-sm:text-xs text-white">
                تأشيرات الآمارات
              </li>
              <li className="text-base max-sm:text-xs text-white">
                حجوزات التذاكر
              </li>
              <li className="text-base max-sm:text-xs text-white">
                حجوزات الفنادق
              </li>
              <li className="text-base max-sm:text-xs text-white">
              خدمات الحج والعمرة 
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg max-sm:text-base text-white font-medium">
              الدعم
            </h4>
            <ul className="mt-5">
              <li className="text-base max-sm:text-xs text-white">
                مشاكل تقنية
              </li>
              <li className="text-base max-sm:text-xs text-white">
                مشاكل إدارية
              </li>
            </ul>
          </div>
        </div>   
        <div className="w-full h-[1px] bg-[#565656] mt-6 mb-2" />
        <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse max-sm:gap-y-1 justify-between items-center">
          <p className="text-sm text-white">
            .Copyright 2022 - 2024 Minasagency. All rights reserved
          </p>
          <div className="flex flex-row items-center gap-3 cursor-pointer">
            <LuInstagram className="text-white" />
            <LuTwitter className="text-white" />
            <LuLinkedin className="text-white" />
            <LuYoutube className="text-white" />
            <LuFacebook className="text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
