import { githubUrl, linkedinUrl } from "@/lib/constants";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-between text-yellow-400 text-2xl font-bold p-6">
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
                        src="/github-mark-white.svg"
                        alt="Github-logo"
                        // className="dark:invert"
                        width={32}
                        height={24}
                        style={{ filter: "invert(8%) sepia(15%) saturate(4420%) hue-rotate(346deg) brightness(100%) contrast(96%)" }}
                        priority
                    />
                </HeaderLink>
                <HeaderLink url={linkedinUrl}>
                    <div className="text-3xl font-bold mr-2 hidden md:flex">
                        Linkedin
                    </div>
                    <Image
                        src="/linkedin-black.svg"
                        alt="Github-logo"
                        // className="dark:invert"
                        width={32}
                        height={24}
                        style={{ filter: "invert(92%) sepia(15%) saturate(4420%) hue-rotate(346deg) brightness(100%) contrast(96%)" }}
                        priority
                    /></HeaderLink>
            </div>
        </header>
    )
}