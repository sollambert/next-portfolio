import { githubUrl, linkedinUrl } from "@/lib/constants";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-between dark:text-yellow-400 text-2xl font-bold p-6">
            <div>
                <HeaderLink url="/">
                    Home
                </HeaderLink>
            </div>
            <div className="flex flex-row">
                <HeaderLink url={githubUrl}>
                    <div className="text-3xl font-bold mr-2 hidden md:flex">
                        Github
                    </div>
                    <Image
                        className="header-image"
                        src="/github-black.svg"
                        alt="Github-logo"
                        // className="dark:invert"
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
                        className="header-image"
                        src="/linkedin-black.svg"
                        alt="Linkedin-logo"
                        // className="dark:invert"
                        width={32}
                        height={32}
                        priority
                    /></HeaderLink>
            </div>
        </header>
    )
}