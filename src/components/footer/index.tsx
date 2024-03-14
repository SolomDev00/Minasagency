// import { LuFacebook } from "react-icons/lu";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] pb-5" dir="rtl">
      <div className="container">
        <div className="flex pt-10">
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg text-white font-medium">الشركة</h4>
            <ul className="mt-5">
              <li className="text-base text-white">عن ميناس</li>
              <li className="text-base text-white">الصحافة</li>
              <li className="text-base text-white">الوظائف</li>
              <li className="text-base text-white">اتصل بنا</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg text-white font-medium">اعرف المزيد</h4>
            <ul className="mt-5">
              <li className="text-base text-white">احجز مع ميناس</li>
              <li className="text-base text-white">الشركاء</li>
              <li className="text-base text-white">للإعلان</li>
              <li className="text-base text-white">أصحاب الفنادق</li>
              <li className="text-base text-white">سياسة الخصوصية</li>
              <li className="text-base text-white">الشروط و الأحكام</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg text-white font-medium">بحث</h4>
            <ul className="mt-5">
              <li className="text-base text-white">دليل المطار</li>
              <li className="text-base text-white">دليل الخطوط الجوية</li>
              <li className="text-base text-white">مواعيد رحلات الطٌيران</li>
              <li className="text-base text-white">سلاسل الفنادق</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4">
            <h4 className="text-lg text-white font-medium">الدعم</h4>
            <ul className="mt-5">
              <li className="text-base text-white">مشاكل تقنية</li>
              <li className="text-base text-white">مشاكل إدارية</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#565656] mt-6 mb-2" />
        <div className="w-full flex flex-row-reverse justify-between items-center">
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
