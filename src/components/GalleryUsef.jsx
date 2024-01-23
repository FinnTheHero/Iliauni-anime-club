import { motion } from "framer-motion";

export const GalleryUsef = () => {
	return (
		<section
			className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
			id="features"
		>
			<div className="flex items-center justify-center mt-12 mb-12">
				<h2 className="text-4xl lg:text-5xl custom-block-big-title text-center mr-6">By Yousef Maher</h2>
				<img src="./images/usef.png" alt="usef" width="50px" height="45px" className="hidden sm:inline-block"/>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
					<div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
						<div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
							<div className="py-3 pl-3 pr-2 rounded ">
								<img
									src="./images/art_usef1.png"
									alt="f2"
									className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
								/>
							</div>
						</div>
						<div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
							<div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
								<img
									src="./images/art_usef2.png"
									alt="f3"
									className="rounded-xl  custom-border-gray"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded-lg ">
								<img
									src="./images/art_usef3.png"
									alt="f4"
									className="rounded-xl  custom-border-gray"
								/>
							</div>
						</div>
					</div>


					<div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
						<div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
							<div className="mb-4 py-3 pl-3 pr-2 rounded">
								<img
									src="./images/art_usef4.png"
									alt="f1"
									className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded ">
								<img
									src="./images/art_usef5.png"
									alt="f2"
									className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
								/>
							</div>
						</div>
						<div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
							<div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
								<img
									src="./images/art_usef6.png"
									alt="f3"
									className="rounded-xl  custom-border-gray"
								/>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
