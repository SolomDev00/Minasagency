import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const AffiliateProgramPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="affiliate" className="w-full h-[255vh]">
            <Helmet>
                <title>Affiliate Program | Minas Company</title>
            </Helmet>
            <div className="Aff-background">
                <div className="affBackground">
                    <div>
                        <h1 className="text-center text-4xl max-sm:text-2xl text-white font-semibold pt-40">
                            {t("aff.title")}{" "}
                            <span className="mark-z">{t("aff.span")}</span>{" "}
                            {t("aff.title2")}
                        </h1>
                        <p className="text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("aff.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default AffiliateProgramPage;
