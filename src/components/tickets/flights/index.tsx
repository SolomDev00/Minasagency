import { Tab } from "@headlessui/react";
import Input from "../../schema/Input";
import Select from "../../schema/Select";
import Button from "../../schema/Button";
import { LuSearch } from "react-icons/lu";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FlightTabs() {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="blur-sm pointer-events-none w-full max-sm:w-[98.7%] px-2 sm:px-0"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Tab.Group>
        <Tab.List className="w-[400px] max-sm:w-full flex max-sm:flex-col justify-end items-end space-x-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            {t("ticket.oneway")}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            {t("ticket.trip")}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            {t("ticket.city")}
          </Tab>
        </Tab.List>
        <Tab.Panels className="rounded-b-md rounded-tl-md min-h-[60px]">
          <Tab.Panel
            className={classNames(
              "max-sm:w-[98.7%] rounded-b-md bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder={t("ticket.from")} />
                <Input placeholder={t("ticket.to")} />
                <Input placeholder={t("ticket.depart")} />
              </div>
              <div className="w-full flex flex-row max-sm:flex-col-reverse max-sm:gap-y-5 items-center justify-between">
                <div className="flex flex-row justify-between items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 text-primary" />
                  <h4>{t("ticket.direct")}</h4>
                </div>
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <Select
                      width={`${i18n.language === "en" ? "w-[65px]" : ""}`}
                      name={t("ticket.adult")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[95px]" : ""}`}
                      name={t("ticket.economy")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[125px]" : ""}`}
                      name={t("ticket.payment")}
                    />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
                    {t("ticket.search")}
                    <LuSearch />
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder={t("ticket.from")} />
                <Input placeholder={t("ticket.to")} />
                <Input placeholder={t("ticket.depart")} />
                <Input placeholder={t("ticket.return")} />
              </div>
              <div className="w-full flex flex-row max-sm:flex-col-reverse max-sm:gap-y-5 items-center justify-between">
                <div className="flex flex-row justify-between items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 text-primary" />
                  <h4>{t("ticket.direct")}</h4>
                </div>
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <Select
                      width={`${i18n.language === "en" ? "w-[65px]" : ""}`}
                      name={t("ticket.adult")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[95px]" : ""}`}
                      name={t("ticket.economy")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[125px]" : ""}`}
                      name={t("ticket.payment")}
                    />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
                    {t("ticket.search")}
                    <LuSearch />
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder={t("ticket.from")} />
                <Input placeholder={t("ticket.to")} />
                <Input placeholder={t("ticket.depart")} />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1 cursor-pointer">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder={t("ticket.from")} />
                <Input placeholder={t("ticket.to")} />
                <Input placeholder={t("ticket.depart")} />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1 cursor-pointer">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder={t("ticket.from")} />
                <Input placeholder={t("ticket.to")} />
                <Input placeholder={t("ticket.depart")} />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1 cursor-pointer">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="w-full flex flex-row items-end justify-end max-sm:justify-center">
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2 w-full">
                    <Select
                      width={`${i18n.language === "en" ? "w-[65px]" : ""}`}
                      name={t("ticket.adult")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[95px]" : ""}`}
                      name={t("ticket.economy")}
                    />
                    <Select
                      width={`${i18n.language === "en" ? "w-[125px]" : ""}`}
                      name={t("ticket.payment")}
                    />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
                    {t("ticket.search")}
                    <LuSearch />
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
