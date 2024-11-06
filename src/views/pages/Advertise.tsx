import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const AdvertisePage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="advertise" className="w-full h-[155vh]">
            <Helmet>
                <title>Advertise | Minas Company</title>
            </Helmet>
            <div className="Advertise-background">
                <div className="advertiseBackground">
                    <div>
                        <h1 className="text-center text-4xl max-sm:text-2xl text-white font-semibold pt-48">
                            {t("privacy.title")}{" "}
                            <span className="mark-z">{t("privacy.span")}</span>{" "}
                            {t("privacy.title2")}
                        </h1>
                        <p className="text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("privacy.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default AdvertisePage;
