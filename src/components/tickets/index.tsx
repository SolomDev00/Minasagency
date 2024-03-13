import { Tab } from "@headlessui/react";
import FlightTabs from "./flights";
import { LuHotel, LuPlane, LuSearch } from "react-icons/lu";
import Button from "../schema/Button";
import Input from "../schema/Input";
import Select from "../schema/Select";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TicketTabs() {
  // const [t, i18n] = useTranslation("global");

  return (
    <div
      className="w-full px-2 sm:px-0"
      dir="rtl"
      // dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Tab.Group>
        <Tab.List className="w-[400px] flex justify-end items-end space-x-1 bg-background/20">
          <Tab
            className={({ selected }) =>
              classNames(
                "flex gap-3 px-2 w-full rounded-r-0 rounded-l-0 rounded-tr-xl py-2.5 font-medium leading-5 text-xl max-sm:text-base",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary dark:border-transparent"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            رحلات الطيران
            <LuPlane />
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "flex gap-3 px-2 w-full rounded-r-0 rounded-l-0 rounded-tl-xl py-2.5 text-xl max-sm:text-base font-medium leading-5",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary dark:border-transparent"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            فنادق
            <LuHotel />
          </Tab>
        </Tab.List>
        <Tab.Panels className="rounded-b-md rounded-tl-md min-h-[60px]">
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-black/90 dark:bg-white p-3 dark:shadow-lg",
              "focus:outline-none"
            )}
          >
            <div className="py-3 px-3">
              <FlightTabs />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-black/90 dark:bg-white p-3 dark:shadow-lg",
              "focus:outline-none"
            )}
          >
            <h3 className="text-black/80 text-lg">أين تفضل المبيت؟</h3>
            <div className="py-3">
              <div className="flex flex-row justify-between items-center gap-2 mb-5">
                <div className="w-2/6 space-y-2 pb-1">
                  <label htmlFor="wInput" className="text-black text-sm">
                    الواجهة
                  </label>
                  <Input id="wInput" placeholder="القاهرة, مصر" />
                </div>
                <div className="w-2/3 flex flex-row items-center justify-between gap-2">
                  <div className="w-full space-y-2 pb-1">
                    <label htmlFor="wInput" className="text-black text-sm">
                      تسجيل الوصول
                    </label>
                    <Input id="wInput" placeholder="خميس 14 مارس 24 .." />
                  </div>
                  <div className="w-full space-y-2 pb-1">
                    <label htmlFor="wInput" className="text-black text-sm">
                      تسجيل خروج
                    </label>
                    <Input id="wInput" placeholder="جمعة, 15 مارس" />
                  </div>
                  <div className="w-full space-y-2 pb-1 px-1">
                    <label htmlFor="wInput" className="text-black text-sm">
                      الضيوف و الغرف
                    </label>
                    <Select id="wInput" name="2 بالغين في غرفة واحدة" />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row justify-between items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 text-primary" />
                  <h4>إلغاء مجاني</h4>
                </div>
                <div className="flex flex-row gap-5">
                  <Button className="px-5 py-2 rounded-lg flex gap-2 hover:bg-primary/80">
                    بحث
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
