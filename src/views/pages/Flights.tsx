import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const FlightsPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="flights" className="w-full h-[255vh]">
            <Helmet>
                <title>Flights | Minas Company</title>
            </Helmet>
            <div className="support-background">
                <div className="supportBackground">
                    <div>
                        <h1 className="tShadow text-center text-4xl max-sm:text-2xl text-white font-semibold pt-40">
                            {t("support.title")}{" "}
                            <span className="mark-z">{t("support.span")}</span>{" "}
                            {t("support.title2")}
                        </h1>
                        <p className="tShadow text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("support.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default FlightsPage;
