import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const ServicesPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="services" className="w-full h-[105vh]">
            <Helmet>
                <title>Our Services | Minas Company</title>
            </Helmet>
            <div className="Services-background">
                <div className="servicesBackground">
                    <div>
                        <h1 className="tShadow text-center text-4xl max-sm:text-2xl text-white font-semibold pt-52">
                            {t("services.title")}{" "}
                            <span className="mark-z">{t("services.span")}</span>{" "}
                            {t("services.title2")}
                        </h1>
                        <p className="tShadow text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("services.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default ServicesPage;
