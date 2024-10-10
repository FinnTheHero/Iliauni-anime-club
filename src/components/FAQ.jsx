import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
    {
        id: 0,
        question: "What is the purpose of this website ?",
        answer: "The Iliauni anime club website is for staying updated on events, connecting with us through applications, and discovering the exciting future plans of the club.",
    },
    {
        id: 1,
        question: "How can I become a member of the Iliauni Anime Club ?",
        answer: "Becoming a member of the Iliauni anime club is easy! Simply navigate to our website's 'Get Started' section, where you'll find all the details and applications you need to join us.",
    },
    {
        id: 2,
        question:
            "What types of anime-related events and activities does Iliauni Anime Club organize ?",
        answer: "Iliauni anime club hosts a variety of exciting events and activities for anime enthusiasts. From engaging screenings and conventions to themed gatherings, our club offers a diverse range of anime-related experiences!",
    },
    {
        id: 3,
        question:
            "Is membership in Iliauni Anime Club limited to students from a specific department or major ?",
        answer: "No, membership in the club is open to all students, regardless of their department or major.",
    },
    {
        id: 4,
        question:
            "Are there leadership opportunities within Iliauni Anime Club ?",
        answer: "Absolutely! Your contributions within the club won't go unnoticed. We actively encourage members to get involved and stand out through their passion and dedication. Outstanding individuals will be scouted for leadership positions.",
    },
    {
        id: 5,
        question: "Will you retrun old FAQ ?",
        answer: "No, we will not retrun old FAQ, due to it being insanely SICK! We can't handle that much heat...",
    },
];

export const FAQ = () => (
    <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
        <div className="absolute -top-10" id="FAQ" />
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="relative z-10 container mx-1 w-full">
                <div className="md:max-w-4xl mx-auto">
                    <p className="mb-7 custom-block-subtitle text-center">
                        Have any questions?
                    </p>
                    <h2 className="mb-16 custom-block-big-title text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="m-6 flex flex-wrap">
                        {FAQData.map((item, index) => (
                            <div className="w-full p-1">
                                <FAQBox
                                    title={item.question}
                                    content={item.answer}
                                    key={item.id}
                                    defaultOpen={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-col p-2  justify-center items-start">
                <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
                    {title}
                </h3>
                <p
                    className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-96" : "max-h-0"
                    }`}
                >
                    {content}
                </p>
            </div>
            <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
                <svg
                    width="28px"
                    height="30px"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-500  ${
                        isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
                    }`}
                >
                    <path
                        d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                        stroke="#e54f4f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
