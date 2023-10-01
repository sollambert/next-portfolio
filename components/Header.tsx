import { githubUrl, linkedinUrl } from "@/lib/constants";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-between text-2xl font-bold pt-4 pr-6">
            <div className="hidden md:flex">
                <HeaderLink url="/">
                    <Image
                        // className="header-image"
                        src="/icons/home.svg"
                        alt="Home icon"
                        className="dark:invert"
                        width={48}
                        height={48}
                        priority
                    />
                </HeaderLink>
            </div>
            <div className="flex flex-row justify-evenly w-full">
                <HeaderLink url={githubUrl}>
                    <div className="text-3xl font-bold mr-2 hidden md:flex">
                        Github
                    </div>
                    <Image
                        // className="header-image"
                        src="/icons/github-black.svg"
                        alt="Github-logo"
                        className="dark:invert"
                        width={32}
                        height={32}
                        priority
                    />
                </HeaderLink>
                <HeaderLink url={linkedinUrl}>
                    <div className="text-3xl font-bold mr-2 hidden md:flex">
                        Linkedin
                    </div>
                    <Image
                        // className="header-image"
                        src="/icons/linkedin-black.svg"
                        alt="Linkedin-logo"
                        className="dark:invert"
                        width={32}
                        height={32}
                        priority
                    /></HeaderLink>
            </div>
        </header>
    )
}