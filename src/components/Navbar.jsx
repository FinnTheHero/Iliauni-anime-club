import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ClubLogo } from "../assets/logos/ClubLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
    { label: "Home", href: "/", ariaLabel: "Home" },
    { label: "Events", href: "/events", ariaLabel: "Events" },
    { label: "About Us", href: "/about-us", ariaLabel: "About Us" },
    { label: "Gallery", href: "/gallery", ariaLabel: "Gallery" },
    { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
            <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <a className="navbar-link" href="/" aria-label="Home">
                        <div className="flex justify-start items-center grow basis-0">
                            <div className="text-white mr-2 text-6xl">
                                <ClubLogo />
                            </div>
                            <div className="text-white font-['Inter'] font-bold text-xl">
                                Iliauni Anime Club
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="hidden lg:flex h-full pl-12 pb-2">
                        {navbarLinks.map(({ href, label, ariaLabel }) => (
                            <a
                                className="navbar-link"
                                href={href}
                                aria-label={ariaLabel}
                                key={label}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    exit={{ opacity: 0 }}
                >
                    {/* <div className="grow basis-0 justify-end hidden lg:flex">
                        <a
                            className="text-white custom-border-gray rounded-xl
					 bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                            href="https://github.com/FinnTheHero/Iliauni-anime-club.git"
                            target="_blank"
                            aria-label="source code"
                        >
                            <GithubIcon />
                            <span className="pt-px">Source Code</span>
                        </a>
                    </div> */}
                    <div className="grow basis-0 justify-end hidden lg:flex">
                        <div
                            className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Join Us!
                        </div>
                    </div>
                </motion.div>
                <div
                    className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-500 "></div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10">
                            {navbarLinks.map(({ label, href, ariaLabel }) => (
                                <a
                                    key={href}
                                    className="navbar-link"
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    aria-label={ariaLabel}
                                >
                                    {label}
                                </a>
                            ))}
                            <div
                                className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Join Us!
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
