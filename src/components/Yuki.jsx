import { motion } from "framer-motion";

export const Yuki = () => (
    <div className="w-full flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
            initial={{ opacity: 0, y: 10, zIndex: 20 }}
            animate={{ opacity: 1, y: 0, zIndex: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            <div className="w-screen flex justify-center ">
                <img
                    src="./images/yuki.png"
                    alt="Iliauni Anime Club"
                    className="w-4/5 2xl:w-[1200px] mx-auto rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0 mb-12 mt-12"
                />
            </div>
        </motion.div>
    </div>
);
