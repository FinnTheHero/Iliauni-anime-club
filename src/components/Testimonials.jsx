import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData1 = [
	{
		customerName: "Aleksandre Nozadze",
		customerTitle: "Tech Support",
		content:
			"Yo, fam! Let me drop some truth bombs about the sickest Anime Club in town. I'm the tech wizard, code ninja, and all-around MANGA fanatic behind the scenes, and let me tell ya, this club is straight FIRE! If you're looking for an anime fam that's leveling up the game, you just found it. Don't miss out, join the Anime Club and let's vibe together! 🤘💻🔥",
		image: "/src/images/aleksandre.png",
		extra: "Hacking you...",
	},
	{
		customerName: "Giorgi Erkomaishvili",
		customerTitle: "President",
		content:
			"You wanna be apart of the cool kids well First up, you gotta love anime. Next, be cool with teamwork. We're all buds here, making things happen together. Organization? Just don't lose your anime watchlist, and we're golden. Dream a bit. Do a bit. Got ideas? Let's make 'em real. Tech stuff? No biggie. If you're not a tech genius its fine. Promise something? Keep it. We like reliable Nakama. Spread good vibes. Make our club feel like home for every anime fan.",
		image: "/src/images/gigi.png",
		extra: "🗿🗿🗿",
	},
	{
		customerName: "Club Bot",
		customerTitle: "Skynet Defence System",
		content:
			"Greetings, fellow anime enthusiasts. I am the sentient code and operational logic unit, your Club's Bot. Should you seek a haven where the binary essence of technology converges with the organic enthusiasm for anime, submit your application for assimilation into the Anime Club. Resistance is futile, assimilation is logical. 🤖💽🔍",
		image: "/src/images/logo.png",
		extra: "Beep Beep",
	},
];

const testimonialsData2 = [
	{
		customerName: "Lembasana Maibam",
		customerTitle: "Club Medic",
		content:
			"With the power bestowed on me by the creator of this webpage, I write to the readers of this comment to stop wasting your time and join the club if you like anime. We do a sorts of fun events and we’d love anyone new who’s interested in anime to join. Join the club and meet other anime enjoyers and let’s have fun :)",
		image: "/src/images/lemba.png",
		extra: "lasang",
	},
	// {
	// 	customerName: "Gigi Erkomaishvili",
	// 	customerTitle: "President of Iliauni Anime Club",
	// 	content:
	// 		"You wanna be apart of the cool kids well First up, you gotta love anime. Next, be cool with teamwork. We're all buds here, making things happen together. Organization? Just don't lose your anime watchlist, and we're golden. Dream a bit. Do a bit. Got ideas? Let's make 'em real. Tech stuff? No biggie. If you're not a tech genius its fine. Promise something? Keep it. We like reliable Nakama. Spread good vibes. Make our club feel like home for every anime fan.",
	// 	image: testimonial1,
	// },
	// {
	// 	customerName: "Clubs Bot",
	// 	customerTitle: "Skynet Defence System",
	// 	content:
	// 		"Greetings, fellow anime enthusiasts. I am the sentient code and operational logic unit, your Club's Bot. Should you seek a haven where the binary essence of technology converges with the organic enthusiasm for anime, submit your application for assimilation into the Anime Club. Resistance is futile; assimilation is logical. 🤖💽🔍 #AnimeClubBinaryChronicles #LogicalOtakuVibes",
	// 	image: testimonial3,
	// },
];

export const Testimonials = () => (
	<section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
		<div className="absolute -top-16" id="feedback" />
		<div className="flex flex-col w-full lg:w-[1150px] justify-center">
			<motion.div
				initial={{ opacity: 0, marginTop: '30px' }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: 0.3, }}
			>
				<div className="custom-block-subtitle text-center mb-6">
					Thoughs...
				</div>
				<div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
					What our members say
				</div>

				<div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center justify-center" style={{ marginTop: '30px' }}>
					{testimonialsData1.map((testimonial, index) => (
						<div
							className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
							key={`${testimonial.customerName}-${index}`}
						>
							<div className="flex mb-2">
								<QuoteIcon />
							</div>
							<div className="custom-content-text-white">
								{testimonial.content}
							</div>
							<div className="custom-content-text-gray flex justify-center" style={{ marginTop: "15px"}}>
								{testimonial.extra}
							</div>
							<div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
								<img src={testimonial.image} alt="" width="50px" height="45px" />
								<div className="flex flex-col ml-4">
									<div className="custom-content-text-white font-medium">
										{testimonial.customerName}
									</div>
									<div className="custom-content-text-gray">
										{testimonial.customerTitle}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center justify-center" style={{ marginTop: '30px' }}>
					{testimonialsData2.map((testimonial, index) => (
						<div
							className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
							key={`${testimonial.customerName}-${index}`}
						>
							<div className="flex mb-2">
								<QuoteIcon />
							</div>
							<div className="custom-content-text-white">
								{testimonial.content}
							</div>
							<div className="custom-content-text-gray flex justify-center" style={{ marginTop: "15px"}}>
								{testimonial.extra}
							</div>
							<div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
								<img src={testimonial.image} alt="" width="50px" height="45px" />
								<div className="flex flex-col ml-4">
									<div className="custom-content-text-white font-medium">
										{testimonial.customerName}
									</div>
									<div className="custom-content-text-gray">
										{testimonial.customerTitle}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	</section>
);
