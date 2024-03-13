import "./Footer.style.css";
import logo from "../../assets/logo.jpeg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="bg-white dark:bg-[#333] h-[17vh] max-sm:max-h-[21vh] max-sm:min-h-[21vh] xl:h-[15.5vh]">
      <div className="container">
        <div className="flex flex-row items-center justify-center mb-5 pt-5"></div>
        <div className="w-full flex justify-center items-center">
          <div className="border-t-[1px] border-black dark:border-white w-[600px]" />
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row justify-center items-center pt-2 text-sm max-sm:text-xs text-black dark:text-gray-400">
          <h5 className="text-center">&#169; {t("footer.copyrights")}</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
