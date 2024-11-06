import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const TermsPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="terms" className="w-full h-[155vh]">
            <Helmet>
                <title>Terms of Services | Minas Company</title>
            </Helmet>
            <div className="Terms-background">
                <div className="termsBackground">
                    <div>
                        <h1 className="text-center text-4xl max-sm:text-2xl text-white font-semibold pt-48">
                            {t("terms.title")}{" "}
                            <span className="mark-z">{t("terms.span")}</span>{" "}
                            {t("terms.title2")}
                        </h1>
                        <p className="text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("terms.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default TermsPage;
