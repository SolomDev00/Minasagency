import { Tab } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { GlobeEuropeAfricaIcon, InformationCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import FaqCards from "./Faq";

interface CustomTabProps {
  selected: boolean;
  onClick: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full px-2 py-20 xl:px-0 container">
      <h3 className="text-4xl text-gray-600 mb-8 text-right">الأسئلة الأكثر شيوعاً</h3>
      <Tab.Group>
        <Tab.List className="max-w-full mb-6 flex space-x-1 rounded-xl bg-background/5 p-1" dir="rtl">
          {[0, 1, 2, 3, 4].map((index) => (
            <Tab
              key={index}
              onClick={() => setCurrentTab(index)}
              {...{ selected: currentTab === index, onClick: () => setCurrentTab(index) } as CustomTabProps}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-xl rounded-sm font-medium flex flex-col justify-center items-center",
                  "focus:outline-none duration-150",

                  selected
                    ? "bg-primary text-white font-medium shadow"
                    : "text-font hover:bg-white/[0.12] hover:text-hover dark:text-bhover dark:bg-ghover",
                  index === 0 ? classNames("rounded-s-xl") : "",
                  index === 4 ? classNames("rounded-e-xl") : ""
                )
              }
            >
              {index === 0 && (
                <>
                  <InformationCircleIcon className={`w-12 ${currentTab === index ? "text-white" : "text-primary"}`} />
                  عامة
                </>
              )}
              {index === 1 && (
                <>
                  <PencilIcon className={`w-12 ${currentTab === index ? "text-white" : "text-primary"}`} />
                  الحجز
                </>
              )}
              {index === 2 && (
                <>
                  <LuSearch className={`w-12 h-12 ${currentTab === index ? "text-white" : "text-primary"}`} />
                  البحث
                </>
              )}
              {index === 3 && (
                <>
                  <GlobeEuropeAfricaIcon className={`w-12 h-12 ${currentTab === index ? "text-white" : "text-primary"}`} />
                  السفر
                </>
              )}
              {index === 4 && (
                <>
                  <UserCircleIcon className={`w-12 h-12 ${currentTab === index ? "text-white" : "text-primary"}`} />
                  الحساب
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-md bg-white p-3",
              "focus:outline-none"
            )}
          >
            <div>
              <FaqCards answer={"solm"} question="How old are you?" width="full" />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-white p-3",
              "focus:outline-none"
            )}
          >
            <div>محتوى العلامة التبويب</div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-white p-3",
              "focus:outline-none"
            )}
          >
            <div>محتوى العلامة التبويب</div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-white p-3",
              "focus:outline-none"
            )}
          >
            <div>محتوى العلامة التبويب</div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-md bg-white p-3",
              "focus:outline-none"
            )}
          >
            <div>محتوى العلامة التبويب</div>
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
