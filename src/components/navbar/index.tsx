import "./Navbar.style.css";
import { useEffect, useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import UK from "../../assets/uk.png";
import UAE from "../../assets/uae.png";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.jpeg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (firstLoad) {
      setFirstLoad(false);
      setScrolling(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstLoad]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("menu-open", showMenu);
    document.body.classList.toggle("menu-closed", !showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className={`header ${
        scrolling ? "bg-white dark:bg-black" : "bg-transparent"
      } duration-200 ${scrolling ? "bg-transparent" : "text-black"} ${
        showMenu ? "menu-open" : ""
      } ${i18n.language === "en" ? "en" : "ar"}`}
      style={{
        display: `${scrolling === true ? "" : "none"}`,
        background: `${window.scrollY < 10 ? "transparent" : ""}`,
        animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        position: "fixed",
        top: 0,
        width: "100%",
        height: "78px",
        zIndex: "3000",
      }}
    >
      <div
        className={`menu__wrapper duration-200 ${
          scrolling ? "bg-white dark:bg-black" : "text-transparent"
        }`}
        style={{
          background: `${window.scrollY < 10 ? "transparent" : ""}`,
          animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        }}
      >
        <div className="menu__bar">
          <Link
            to="/"
            title={t("navbar.logo")}
            aria-label="home"
            className="logo"
          >
            <img
              className={`${i18n.language === "en" ? "ml-0" : "ml-6"}`}
              src={LogoImg}
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="navigation mt-4 hide">
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/"
                  title={t("navbar.home")}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/about-us"
                  title={t("navbar.about")}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/flight"
                  title={t("navbar.flight")}
                >
                  {t("navbar.flight")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/services"
                  title={t("navbar.services")}
                >
                  {t("navbar.services")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black dark:text-[#f9f9f9] duration-150"
                  to="/partners"
                  title={t("navbar.partners")}
                >
                  {t("navbar.partners")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-3 mt-4">
          <div
            className={`flex flex-row items-center gap-1 ${
              i18n.language === "en" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <button
              title={t("navbar.lang")}
              className={`language-button duration-100 ${
                i18n.language === "en" ? "english" : "arabic"
              }`}
              onClick={() =>
                handleChangeLang(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? (
                <img className="w-6" src={UK} alt="english" />
              ) : (
                <img className="w-6" src={UAE} alt="arabic" />
              )}
            </button>
          </div>
          <div className="w-[1px] h-7 bg-slate-400 hide" />
          <div className="action-buttons hide">
            <Link
              to="/contact"
              title={t("navbar.contact")}
              target="_blank"
              className="primary"
            >
              {t("navbar.contact")}
            </Link>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="burger-menu z-20"
          type="button"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <XMarkIcon className={"fill-black dark:fill-white"} />
          ) : i18n.language === "en" ? (
            <Bars3BottomRightIcon className={"fill-black dark:fill-white"} />
          ) : (
            <Bars3BottomLeftIcon className={"fill-black dark:fill-white"} />
          )}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav>
                <ul className="text-center space-y-5">
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link to="/" title="Home" onClick={handleNavLinkClick}>
                      {t("navbar.home")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/about-us"
                      title="about"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.about")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/achievements"
                      title="Achievements"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.achievements")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link to="/faq" title="faq" onClick={handleNavLinkClick}>
                      {t("navbar.faq")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/investment"
                      title="investment"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.investment")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/signal"
                      title="signal"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.signal")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/wallet"
                      title="wallet"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.wallet")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/marketing"
                      title="marketing"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.marketing")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/contact-us"
                      title="contact"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
