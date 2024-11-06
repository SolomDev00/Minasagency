import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SuFlag from '../../assets/su.png';
import EgFlag from '../../assets/eg.png';
import UaeFlag from '../../assets/uae.png';

const Timeline = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const timelineData = [
        { year: 2012, location: "مكتب الخرطوم 3", description: "تأسيس 2012", flag: SuFlag },
        { year: 2022, location: "مكتب الخرطوم السوق العربي", description: "تأسيس 2022", flag: SuFlag },
        { year: 2023, location: "مكتب الجيزة", description: "تأسيس 2023", flag: EgFlag },
        { year: 2024, location: "مكتب عجمان", description: "تأسيس 2024", flag: UaeFlag },
    ];

    return (
        <section className="w-full h-auto py-10 pb-16">
            <h2 className="text-center text-4xl font-bold mb-10 text-gray-700">تاريخ تطور مكاتبنا</h2>
            <div className="container mx-auto flex flex-col items-center relative">
                <div className="mt-16 absolute h-[75%] w-1 bg-primary left-1/2 transform -translate-x-1/2">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-gray-400 absolute z-30"
                            style={{
                                top: `${(index / (timelineData.length - 1)) * 100}%`,
                                transform: "translate(-50%, -50%)",              
                            }}
                        >
                            <img src={item.flag} alt={`${item.location}`} className="w-full h-full relative z-30 object-cover" />
                        </div>
                    ))}
                </div>
                {timelineData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className={`mb-10 w-5/6 lg:w-[45%] p-6 shadow-lg rounded-lg bg-white 
                                ${isLeft ? "text-right ml-auto" : "text-left mr-auto"} relative`}
                            key={index}
                            style={{
                                zIndex: 1,
                            }}
                        >
                            <h3 className="text-2xl font-semibold text-accent mb-3">{item.location}</h3>
                            <p className="text-lg text-gray-700">{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Timeline;
