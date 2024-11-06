import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const HoteliersPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="hoteliers" className="w-full h-[105vh]">
            <Helmet>
                <title>Hoteliers | Minas Company</title>
            </Helmet>
            <div className="Hoteliers-background">
                <div className="hoteliersBackground">
                    <div>
                        <h1 className="tShadow text-center text-4xl max-sm:text-2xl text-white font-semibold pt-52">
                            {t("hoteliers.title")}{" "}
                            <span className="mark-z">{t("hoteliers.span")}</span>{" "}
                            {t("hoteliers.title2")}
                        </h1>
                        <p className="tShadow text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("hoteliers.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default HoteliersPage;
