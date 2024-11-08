import "./Navbar.style.css";
import { useEffect, useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import UK from "../../assets/uk.png";
import EG from "../../assets/eg.png";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/light.png";

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
      className={`header ${scrolling ? "bg-[#212d5d]" : "bg-transparent"
        } duration-200 ${scrolling ? "bg-[#212d5d]" : "bg-transparent"} ${showMenu ? "menu-open" : ""
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
        className={`menu__wrapper duration-200 ${scrolling ? "bg-[#212d5d]" : "text-transparent"
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
              className={`${i18n.language === "en" ? "ml-0" : "max-sm:ml-0 ml-6"
                }`}
              src={LogoImg}
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="navigation mt-4 hide">
              <li>
                <Link
                  className="text-white duration-300"
                  to="/"
                  title={t("navbar.home")}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white duration-300"
                  to="/about-us"
                  title={t("navbar.about")}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white duration-300"
                  to="/flights"
                  title={t("navbar.flight")}
                >
                  {t("navbar.flight")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white duration-300"
                  to="/our-services"
                  title={t("navbar.services")}
                >
                  {t("navbar.services")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-white duration-300"
                  to="/affiliate-program"
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
            className={`flex flex-row items-center gap-1 ${i18n.language === "en" ? "flex-row" : "flex-row-reverse"
              }`}
          >
            <button
              title={t("navbar.lang")}
              className={`language-button duration-100 ${i18n.language === "en" ? "english" : "arabic"
                }`}
              onClick={() =>
                handleChangeLang(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? (
                <img className="w-6" src={UK} alt="english" />
              ) : (
                  <img className="w-6" src={EG} alt="arabic" />
              )}
            </button>
          </div>
          <div className="w-[1px] h-7 bg-slate-400 hide" />
          <div className="action-buttons hide">
            <Link
              to="/support"
              title={t("navbar.contact")}
              // target="_blank"
              className={`primary flex ${i18n.language === "en" ? "flex-row" : "flex-row-reverse"
                } justify-between items-center gap-2 hover:to-blue-700`}
            >
              <PhoneIcon className="w-5 h-5" /> {t("navbar.contact")}
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
            <XMarkIcon className={"fill-white"} />
          ) : i18n.language === "en" ? (
            <Bars3BottomRightIcon className={"fill-white"} />
          ) : (
            <Bars3BottomLeftIcon className={"fill-white"} />
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
                      to="/services"
                      title="services"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.services")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/partners"
                      title="partners"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.partners")}
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
