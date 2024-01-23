import Image from "next/image";
import LogoSAE from "@/public/img/Logo.png";
import LogoDiscord from "@/public/img/Discord.svg";

export default function Header() {
    return (
        <>
            <header>
                <nav className="px-10 md:px-40 justify-between flex font-clash font-medium">
                    <ul>
                        <li>
                            <Image src={LogoSAE} alt="Logo officiel de San Andreas Emergency" width={75}/>
                        </li>
                    </ul>
                    <ul className="flex gap-14 my-auto">
                        <li className="hidden md:block">
                            <a href="../pages/rules.js" className="hover:text-white duration-200 hover:duration-200">Règlement</a>
                        </li>
                        <li className="hidden md:block">
                            <a href="../pages/shop.js" className="hover:text-white duration-200 hover:duration-200">Boutique</a>
                        </li>
                        <li className="my-auto hidden md:block">
                            <a href="https://discord.gg/geqTKHQxs3" target="_blank">
                                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="hover:fill-white duration-200 hover:duration-200" d="M19.4832 1.83998C17.9721 1.20497 16.3768 0.754475 14.7381 0.5C14.5139 0.867934 14.311 1.24649 14.1303 1.63408C12.3848 1.39266 10.6097 1.39266 8.86423 1.63408C8.68343 1.24653 8.48054 0.867978 8.25639 0.5C6.61666 0.756624 5.02034 1.20819 3.50769 1.8433C0.504702 5.92134 -0.309361 9.89809 0.0976702 13.8184C1.8563 15.011 3.8247 15.918 5.91732 16.5C6.38851 15.9183 6.80546 15.3012 7.16374 14.6553C6.48324 14.422 5.82644 14.1342 5.20094 13.7951C5.36556 13.6856 5.52657 13.5726 5.68214 13.4631C7.5022 14.2487 9.48871 14.656 11.5 14.656C13.5113 14.656 15.4978 14.2487 17.3178 13.4631C17.4752 13.5809 17.6362 13.6939 17.799 13.7951C17.1723 14.1347 16.5143 14.4231 15.8326 14.6569C16.1904 15.3026 16.6074 15.9192 17.079 16.5C19.1734 15.9204 21.1433 15.0138 22.9023 13.82C23.3799 9.27377 22.0864 5.33354 19.4832 1.83998ZM7.67931 11.4074C6.54505 11.4074 5.60797 10.4626 5.60797 9.30033C5.60797 8.13802 6.51249 7.18493 7.67569 7.18493C8.8389 7.18493 9.76874 8.13802 9.74884 9.30033C9.72894 10.4626 8.83528 11.4074 7.67931 11.4074ZM15.3207 11.4074C14.1846 11.4074 13.2511 10.4626 13.2511 9.30033C13.2511 8.13802 14.1556 7.18493 15.3207 7.18493C16.4857 7.18493 17.4083 8.13802 17.3884 9.30033C17.3685 10.4626 16.4766 11.4074 15.3207 11.4074Z" fill="#888888"/>
                                </svg>
                            </a>
                        </li>
                        <li className="block md:hidden">

                        </li>
                    </ul>
                </nav>
                <div className="separator"></div>
            </header>
        </>
    )
}