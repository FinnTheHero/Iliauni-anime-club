import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Event2 = () => (
	<section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
				<div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
					<div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
						{/* <div className="mb-4 py-3 pl-3 pr-2 rounded">
							<img
								src="./images/wwwBaner.jpg"
								alt="f1"
								className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
							/>
						</div> */}
						<div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
							<img
								src="./images/www1.jpg"
								alt="f1"
								className="rounded-xl  custom-border-gray"
							/>
						</div>
						<div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
							<img
								src="./images/www2.jpg"
								alt="f2"
								className="rounded-xl  custom-border-gray"
							/>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
					<div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
						<span className="custom-block-subtitle">
							10 / 12 / 2023
						</span>
						<h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
						What? where and When?
						</h2>
						<p className="mb-12 text-customGrayText leading-loose">
						On December 10, Iliauni Anime Club organized the What? where When?-on the theme of Naruto.
						<br />
						13 teams participated in the game, of which the team "Achia Uchia" team became the winner.
						<br />
						The winners were given certificates and 70 GEL Ligamus vouchers.
						<br />
						<br />
						Presenter and author of questions: Levan Tkhilaishvili.
						</p>
						<ul className="mb-6 text-white">
							<li className="mb-4 flex">
								<CheckArrowIcon />
								<span>Winners appointed</span>
							</li>
							<li className="mb-4 flex">
								<CheckArrowIcon />
								<span>Prizes delivered</span>
							</li>
							<li className="mb-4 flex">
								<CheckArrowIcon />
								<span>Fun? Ofc we had that!</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	</section>
);
