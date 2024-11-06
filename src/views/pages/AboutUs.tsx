import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { CheckBadgeIcon, RssIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon, TicketIcon } from "@heroicons/react/24/outline";
import Timeline from "../../components/ui/TimeLine";

const AboutUsPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about" className="w-full h-auto">
      <Helmet>
        <title>About Us | Minas Company</title>
      </Helmet>
      <div className="about-background">
        <div className="aboutBackground">
          <div>
            <h1 className="text-center text-4xl max-sm:text-2xl text-white font-semibold pt-40">
              {t("about.title")}{" "}
              <span className="mark-z">{t("about.span")}</span>{" "}
              {t("about.title2")}
            </h1>
            <p className="text-center text-2xl max-sm:text-lg text-white/90 pt-5">
              {t("about.description")}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-20 flex flex-col justify-center items-center w-full space-y-14">
        <div className="flex flex-col justify-center items-end space-y-10">
          <h1 className="text-4xl text-gray-700">
            لماذا مينـاس ؟
          </h1>
          <h3 dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
            className="text-2xl text-gray-800"
          >
            مرحباً بكم في ميناس، الشركة الرائدة في مجال حجز التذاكر الإلكترونية. نحن ملتزمون بتقديم أفضل الخدمات لتلبية احتياجات السفر الخاصة بكم، سواء كانت تذاكر الطيران، القطارات، الحافلات، أو الفعاليات المختلفة.
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center items-end space-y-10">
            <h1 className="text-4xl text-gray-700">
              رؤيتنا
            </h1>
            <h3 dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              className="text-2xl text-gray-800"
            >
              نسعى لأن نكون الخيار الأول لكل مسافر، من خلال تقديم خدمات عالية الجودة وأسعار تنافسية. رؤيتنا تتمحور حول جعل تجربة الحجز سهلة وميسرة، وضمان رضا العملاء في كل خطوة من خطوات رحلتهم.            </h3>
          </div>
          <div className="flex flex-col justify-center items-end space-y-10">
            <h1 className="text-4xl text-gray-700">
              مهمتنا
            </h1>
            <h3 dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
              className="text-2xl text-gray-800"
            >
              مهمتنا هي توفير تجربة حجز مريحة وسهلة من خلال منصة إلكترونية مبتكرة تتيح للمستخدمين حجز تذاكرهم بسرعة وأمان. نحن نعمل على تقديم دعم متواصل للعملاء وتقديم خيارات متنوعة لتناسب كافة الاحتياجات.            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end space-y-10">
          <h1 className="text-4xl text-gray-700">قيم ميناس</h1>
          <div className="flex flex-col justify-between items-center space-y-10">
            <div className="flex flex-row justify-between items-center gap-10">
              <div className="flex flex-row justify-between items-start shadow-md rounded-lg p-3 w-[450px] gap-6">
                <div className="flex flex-col justify-center items-end gap-y-3">
                  <h3 className="text-2xl">الشفافية</h3>
                  <p dir={`${i18n.language === "en" ? "ltr" : "rtl"}`} className="text-lg">
                    نؤمن بضرورة تقديم معلومات واضحة ودقيقة لعملائنا.
                  </p>
                </div>
                <CheckBadgeIcon className="w-20 p-1 border-primary border-4 rounded-[20px] text-primary cursor-pointer hover:border-primary/90 duration-150" />
              </div>
              <div className="flex flex-row justify-between items-start shadow-md rounded-lg p-3 w-[450px] gap-6">
                <div className="flex flex-col justify-center items-end gap-y-3">
                  <h3 className="text-2xl">الابتكار</h3>
                  <p dir={`${i18n.language === "en" ? "ltr" : "rtl"}`} className="text-lg">
                    نعمل على تطوير تقنيات جديدة لتحسين تجربة المستخدم.                </p>
                </div>
                <LightBulbIcon className="w-20 p-1 border-primary border-4 rounded-[20px] text-primary cursor-pointer hover:border-primary/90 duration-150" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-10">
              <div className="flex flex-row justify-between items-start shadow-md rounded-lg p-3 w-[450px] gap-6">
                <div className="flex flex-col justify-center items-end gap-y-3">
                  <h3 className="text-2xl">خدمة العملاء</h3>
                  <p dir={`${i18n.language === "en" ? "ltr" : "rtl"}`} className="text-lg">
                    نحرص على توفير أفضل خدمة عملاء لضمان رضاهم الكامل.                  </p>
                </div>
                <RssIcon className="w-20 p-1 border-primary border-4 rounded-[20px] text-primary cursor-pointer hover:border-primary/90 duration-150" />
              </div>
              <div className="flex flex-row justify-between items-start shadow-md rounded-lg p-3 w-[450px] gap-6">
                <div className="flex flex-col justify-center items-end gap-y-3">
                  <h3 className="text-2xl">حجز تذاكر الطيران</h3>
                  <p dir={`${i18n.language === "en" ? "ltr" : "rtl"}`} className="text-lg">
                    نقدم خيارات متعددة من شركات الطيران العالمية والمحلية.         </p>
                </div>
                <TicketIcon className="w-20 p-1 border-primary border-4 rounded-[20px] text-primary cursor-pointer hover:border-primary/90 duration-150" />
              </div>
            </div>
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  );

};

export default AboutUsPage;
