import { Tab } from "@headlessui/react";
import Input from "../../schema/Input";
import Select from "../../schema/Select";
import Button from "../../schema/Button";
import { LuSearch } from "react-icons/lu";
import { XMarkIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FlightTabs() {
  // const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full max-sm:w-[98.7%] px-2 sm:px-0" dir="rtl">
      <Tab.Group>
        <Tab.List className="w-[400px] max-sm:w-full flex max-sm:flex-col justify-end items-end space-x-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary dark:border-transparent"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            ذهاب فقط
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary dark:border-transparent"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            ذهاب و عودة
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-md py-2.5 max-sm:py-1 font-medium leading-5 text-base max-sm:text-sm",
                "focus:outline-none border-2 border-transparent duration-150",
                selected
                  ? "bg-primary text-white font-medium shadow-md border-primary dark:border-transparent"
                  : "bg-white hover:bg-primary/90 hover:text-white text-black"
              )
            }
          >
            واجهات متعددة
          </Tab>
        </Tab.List>
        <Tab.Panels className="rounded-b-md rounded-tl-md min-h-[60px]">
          <Tab.Panel
            className={classNames(
              "max-sm:w-[98.7%] rounded-b-md bg-black/90 dark:bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder="من" />
                <Input placeholder="إلي" />
                <Input placeholder="المغادرة" />
              </div>
              <div className="w-full flex flex-row max-sm:flex-col-reverse max-sm:gap-y-5 items-center justify-between">
                <div className="flex flex-row justify-between items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 text-primary" />
                  <h4>طيران مباشر فقط</h4>
                </div>
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <Select name="1 بالغ" />
                    <Select name="الدرجة الإقتصادية" />
                    <Select name="2 طرق دفع" />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
                    بحث
                    <LuSearch />
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-black/90 dark:bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder="من" />
                <Input placeholder="إلي" />
                <Input placeholder="المغادرة" />
                <Input placeholder="العودة" />
              </div>
              <div className="w-full flex flex-row max-sm:flex-col-reverse max-sm:gap-y-5 items-center justify-between">
                <div className="flex flex-row justify-between items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 text-primary" />
                  <h4>طيران مباشر فقط</h4>
                </div>
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <Select name="1 بالغ" />
                    <Select name="الدرجة الإقتصادية" />
                    <Select name="2 طرق دفع" />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
                    بحث
                    <LuSearch />
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-black/90 dark:bg-white",
              "focus:outline-none"
            )}
          >
            <div className="py-3">
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder="من" />
                <Input placeholder="إلي" />
                <Input placeholder="المغادرة" />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder="من" />
                <Input placeholder="إلي" />
                <Input placeholder="المغادرة" />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="flex flex-row max-sm:flex-col justify-between items-center gap-2 mb-5">
                <Input placeholder="من" />
                <Input placeholder="إلي" />
                <Input placeholder="المغادرة" />
                <div className="w-16 max-sm:w-5 bg-gray-400 rounded-full mr-3 ml-1">
                  <XMarkIcon className=" text-white" />
                </div>
              </div>
              <div className="w-full flex flex-row items-end justify-end max-sm:justify-center">
                <div className="flex flex-row max-sm:flex-col gap-5">
                  <div className="flex flex-row gap-2">
                    <Select name="1 بالغ" />
                    <Select name="الدرجة الإقتصادية" />
                    <Select name="2 طرق دفع" />
                  </div>
                  <Button className="px-5 py-2 rounded-lg flex gap-2">
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
