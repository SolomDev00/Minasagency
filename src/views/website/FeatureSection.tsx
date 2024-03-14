import AppImg from "../../assets/icons/user-interface.png";
import CheckImg from "../../assets/icons/insurance.png";
import PaymentImg from "../../assets/icons/payment.png";
import ClockImg from "../../assets/icons/clock.png";

const FeatureSection = () => {
  return (
    <section id="feature" className="container mt-12">
      <div className="flex flex-row-reverse max-sm:flex-col justify-between items-center gap-2">
        <div className="w-[350px] p-2 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <img className="w-20 h-20 mb-3" src={AppImg} alt="app" />
          <div className="text-center">
            <h4 className="text-base font-semibold">أفضل تطبيق للحجز</h4>
            <p className="text-sm text-gray-500">
              حصل علي تقييمات كثيرة في مصر و الوطن العربي
            </p>
          </div>
        </div>
        <div className="w-[350px] p-2 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <img className="w-20 h-20 mb-3" src={CheckImg} alt="check" />
          <div className="text-center">
            <h4 className="text-base font-semibold">أسعار نهائيّة</h4>
            <p className="text-sm text-gray-500">
              أسعارنا ثابتة ، لا ضرائب أو رسوم إضافية
            </p>
          </div>
        </div>
        <div className="w-[350px] p-2 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <img className="w-20 h-20 mb-3" src={PaymentImg} alt="payment" />
          <div className="text-center">
            <h4 className="text-base font-semibold">خيارات دفع واسعة</h4>
            <p className="text-sm text-gray-500">
              نتائج بحث تناسب وسائل الدفع المفضلة لديك
            </p>
          </div>
        </div>
        <div className="w-[350px] p-2 flex flex-col justify-center items-center rounded-lg shadow-lg">
          <img className="w-20 h-20 mb-3" src={ClockImg} alt="clock" />
          <div className="text-center">
            <h4 className="text-base font-semibold">حجز أسرع وأسهل</h4>
            <p className="text-sm text-gray-500">
              ابحث، قارن ثم احجز بسرعة قصوى مع نخبة المزودين
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
