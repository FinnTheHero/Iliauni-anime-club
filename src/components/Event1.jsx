import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Event1 = () => {
	return (
		<section
			className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
			id="features"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
					<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
						<div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
							<span className="custom-block-subtitle">22 / 12 / 2023</span>
							<h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
								Art exhibition
							</h2>
							<p className="mb-10 text-customGrayText leading-loose">
							On December 22, an exhibition on the topic of anime was held in the student space of the E building of Iliauni,
							Organized by Iliauni anime club.
							<br />
							Paintings made by Iliauni students were presented at the exhibition.
							<br />
							Visitors had the opportunity to choose and reveal the best work. 
							</p>
							<ul className="mb-6 text-white">
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Overly competitive</span>
								</li>
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Exclent exhibits</span>
								</li>
								<li className="mb-4 flex">
									<CheckArrowIcon />
									<span>Went well, every activist was successfully neutrilized</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
						<div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
							<div className="mb-4 py-3 pl-3 pr-2 rounded">
								<img
									src="./images/art1.png"
									alt="f1"
									className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded ">
								<img
									src="./images/art2.png"
									alt="f2"
									className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
								/>
							</div>
						</div>
						<div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
							<div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
								<img
									src="./images/art3.png"
									alt="f3"
									className="rounded-xl  custom-border-gray"
								/>
							</div>
							<div className="py-3 pl-3 pr-2 rounded-lg ">
								<img
									src="./images/art4.png"
									alt="f4"
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
