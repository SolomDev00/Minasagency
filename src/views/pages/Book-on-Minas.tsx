import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Tabs from "../../components/schema/Tabs";

const BookPage = () => {
    const [t] = useTranslation("global");

    return (
        <section id="book" className="w-full h-[105vh]">
            <Helmet>
                <title>Book on Minas | Minas Company</title>
            </Helmet>
            <div className="Book-background">
                <div className="bookBackground">
                    <div>
                        <h1 className="tShadow text-center text-4xl max-sm:text-2xl text-white font-semibold pt-52">
                            {t("book.title")}{" "}
                            <span className="mark-z">{t("book.span")}</span>{" "}
                            {t("book.title2")}
                        </h1>
                        <p className="tShadow text-center text-2xl max-sm:text-lg text-white/90 pt-5">
                            {t("book.description")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs />
        </section >
    );

};

export default BookPage;
