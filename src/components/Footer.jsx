import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { ClubLogo } from "../assets/logos/ClubLogo";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GmailIcon } from "../assets/icons/GmailIcon";

const footerData = [
    {
        title: "Cool Stuff",
        items: [
            {
                name: "Contact Us",
                link: "/contact-us",
            },
            {
                name: "History",
                link: "/about-us#history",
            },
            {
                name: "Jobs",
                link: "/jobs",
            },
        ],
    },
    {
        title: "About Us",
        items: [
            {
                name: "About Us",
                link: "/about-us",
            },
            {
                name: "Team",
                link: "/team",
            },
        ],
    },
];

export const Footer = () => {
    return (
        <footer>
            <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
                <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                            <div className="flex justify-center lg:justify-start items-center grow basis-0">
                                <div className="text-white mr-2 text-6xl">
                                    <ClubLogo />
                                </div>
                                <div className="text-white font-['Inter'] font-bold text-xl">
                                    Iliauni Anime Club
                                </div>
                            </div>
                            <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                                Sanctuary for weebs.
                            </p>
                            <div className="w-36 mx-auto lg:mx-0">
                                <a
                                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                                    href="https://www.facebook.com/profile.php?id=100092313884938"
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                                    href="https://discord.gg/4GyHADSG8M"
                                >
                                    <DiscordIcon />
                                </a>
                                <a
                                    className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                                    href="mailto:animelovers@iliauni.edu.ge"
                                >
                                    <GmailIcon />
                                </a>
                                {/* <a
									className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
									href="#"
								>
									<InstagramIcon />
								</a> */}
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-around">
                            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    {footerData[0].title}
                                </h3>
                                <ul>
                                    {footerData[0].items.map((item, i) => (
                                        <li key={i} className="mb-4">
                                            <a
                                                className="text-gray-400 hover:text-gray-300"
                                                href={item.link}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-auto">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    {footerData[1].title}
                                </h3>
                                <ul>
                                    {footerData[1].items.map((item, i) => (
                                        <li key={i} className="mb-4">
                                            <a
                                                className="text-gray-400 hover:text-gray-300"
                                                href={item.link}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
                        Website, logo and images belong to Iliauni Anime Club
                    </p>
                </div>
            </div>
        </footer>
    );
};
