import { Tab } from "@headlessui/react";
import HRGImg from "../../../assets/places/HRG.webp";
import ATHImg from "../../../assets/places/ATH.jpg";
import ISTImg from "../../../assets/places/IST.jpg";
import JTRImg from "../../../assets/places/JTR.jpg";
import BUDImg from "../../../assets/places/BUD.jpg";
import AHBImg from "../../../assets/places/AHB.webp";
import AMMImg from "../../../assets/places/AMM.webp";
import VIEImg from "../../../assets/places/VIE.jpg";
import ROMImg from "../../../assets/places/ROM.jpg";
import BEYImg from "../../../assets/places/BEY.webp";
import DBXImg from "../../../assets/places/DXB.webp";
import CMNImg from "../../../assets/places/CMN.webp";
import MADImg from "../../../assets/places/MAD.jpg";
import BERImg from "../../../assets/places/BER.webp";
import BCNImg from "../../../assets/places/BCN.jpg";
import LONImg from "../../../assets/places/LON.jpg";
import AUHImg from "../../../assets/places/AUH.webp";
import GIZImg from "../../../assets/places/GIZ.webp";
import MCTImg from "../../../assets/places/MCT.jpg";
import PARImg from "../../../assets/places/PAR.jpg";
import MUCImg from "../../../assets/places/MUC.jpg";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RehlaTabs() {
  return (
    <div className="w-full px-2 sm:px-0 relative z-50" dir="rtl">
      <Tab.Group>
        <Tab.List className="w-[630px] flex justify-end max-sm:justify-normal max-sm:items-center max-sm:w-full items-end max-sm:flex-wrap max-sm:gap-4 space-x-2 bg-background/20">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            رومانسية
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            للرحالة
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            عائلية
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            طبيعية
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            حلال
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            شاطئية
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            ثقافية
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full max-sm:w-[55px] py-1.5 text-sm max-sm:text-sm font-medium outline-none",
                "focus:outline-none duration-150",
                selected
                  ? "bg-transparent text-primary text-base font-medium border-primary"
                  : "bg-white hover:text-primary/90 text-black"
              )
            }
          >
            صيفية
          </Tab>
        </Tab.List>
        <Tab.Panels className="rounded-b-md rounded-tl-md min-h-[60px]">
          <Tab.Panel
            className={classNames(
              "rounded-b-md bg-black/90 dark:bg-white",
              "focus:outline-none"
            )}
          >
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={HRGImg}
                    alt="الغردقة"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">الغردقة</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      مصر
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ATHImg}
                    alt="اثينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">أثينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      اليونان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ISTImg}
                    alt="اسطنبول"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">إسطنبول</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      تركيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,048</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={JTRImg}
                    alt="سانتوريني"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">سانتوريني</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      اليونان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={BUDImg}
                    alt="بودابست"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">بودابست</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      اليونان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,538</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AHBImg}
                    alt="أبها"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">أبها</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,448</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={BEYImg}
                    alt="بيروت"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">بيروت</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      لبنان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={BUDImg}
                    alt="بودابست"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">بودابست</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      المجر
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ISTImg}
                    alt="اسطنبول"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">إسطنبول</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      تركيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,048</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={CMNImg}
                    alt="الدار البيضاء"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">الدار البيضاء</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      المغرب
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,538</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MADImg}
                    alt="مدريد"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مدريد</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إسبانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">7,448</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={BERImg}
                    alt="برلين"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">برلين</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={BCNImg}
                    alt="برشلونة"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">برشلونة</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إسبانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={LONImg}
                    alt="لندن"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">لندن</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      المملكة المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-8">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AUHImg}
                    alt="ابو ظبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ابو ظبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">3,148</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={GIZImg}
                    alt="جيزان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">جيزان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      السعودية
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">6,904</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={DBXImg}
                    alt="دبي"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">دبي</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الإمارات العربية المتحدة
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={ROMImg}
                    alt="روما"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">روما</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      إيطاليا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={VIEImg}
                    alt="فيينا"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">فيينا</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      النمسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MCTImg}
                    alt="مسقط"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">مسقط</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      سلطنة عمان
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,161</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 flex flex-row max-sm:flex-col gap-4 mt-2">
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={AMMImg}
                    alt="عمُان"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">عمُان</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      الأردن
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,315</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={PARImg}
                    alt="باريس"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">باريس</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      فرنسا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,381</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
                <div className="placeBox">
                  <img
                    className="flex-shrink-0 h-full w-[148px]"
                    src={MUCImg}
                    alt="ميونيخ"
                  />
                  <div className="flex flex-grow flex-col p-4 items-start">
                    <h4 className="text-base font-semibold">ميونيخ</h4>
                    <h6 className="text-[#767676] text-xs font-normal mt-1">
                      ألمانيا
                    </h6>
                    <h6 className="items-end text-[#767676] font-normal flex flex-grow text-sm">
                      رحلة ذهاب و عودة
                    </h6>
                    <div className="text-black text-xl font-semibold flex items-end gap-[2px]">
                      <h6 className="">8,244</h6>
                      <h5 className="font-normal text-xs">EGP</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
