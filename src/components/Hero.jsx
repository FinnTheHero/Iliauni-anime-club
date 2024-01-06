import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
// import dashboard from "/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
    className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
    id="home"
    >
    <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">Discover whole new World !</div>
        </motion.div>
        
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        >
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
                <span className="inline md:hidden">Iliauni Anime Club</span>
                <span className="hidden md:inline">Anime Club For Everyone</span>
            </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        >
            <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
                Join us and experience the world of anime like never before!
            </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        >
        <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
            className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
            onClick={() => setIsModalOpen(true)}
            >
            Get Started
            </div>
        </div>
        </motion.div>
        
        {/* TODO: Add some cool group photo here */}
        {/* <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        >
        <div className="relative w-screen flex justify-center ">
            <img
            src={dashboard}
            alt="123"
            className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
        </div>
        </motion.div> */}

        <div className="relative w-screen flex justify-center ">
            <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
                <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className=" bg-customDarkBg2"
                >
                <path
                    d="M1200 0L0 0 598.97 114.72 1200 0z"
                    className="shape-fill custom-bg-dark1"
                ></path>
                </svg>
            </div>
        </div>
    </div>
    {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    )}
    </section>
);
};
