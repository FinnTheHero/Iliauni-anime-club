import { motion } from "framer-motion";

export const Fof = () => {
    return (
        <section
            className="w-screen  flex justify-center items-center bg-customDarkBg1 hero-bg-gradient"
            id="404"
        >
            <div className="w-full h-[100vh] flex flex-col justify-center items-center text-center">
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                    <div className="text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">Something went wrong...</div>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                >
                    <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
                        <span className="inline md:hidden">Page Not Found</span>
                        <span className="hidden md:inline">Page Not Found</span>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
                        Page you are looking for does not exist, has been moved or is under construction.
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
                        onClick={() => window.location.href = "/"}
                        >
                        Back to Home
                        </div>
                    </div>
                </motion.div>
{/* 
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
                        />
                        </svg>
                    </div>
                </div> */}
            </div>
        </section>
    );
};
