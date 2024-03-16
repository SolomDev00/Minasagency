import { useTranslation } from "react-i18next";

const LandingSection = () => {
  const [t] = useTranslation("global");

  return (
    <section id="landing" className="w-full h-[35vh]">
      <div className="landing-background">
        <div className="landingBackground">
          <div>
            <h1 className="text-center text-4xl max-sm:text-2xl text-white font-semibold pt-40">
              {t("landing.title")}{" "}
              <span className="mark-z">{t("landing.span")}</span>{" "}
              {t("landing.title2")}
            </h1>
            <p className="text-center text-2xl max-sm:text-lg text-white/90 pt-5">
              {t("landing.description")}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
