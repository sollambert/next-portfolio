import { githubUrl, linkedinUrl } from "@/lib/constants";
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-between text-yellow-400 text-2xl font-bold p-6">
            <div>
                <HeaderLink url="/">Home</HeaderLink>
            </div>
            <div>
                <span className="mr-4">
                    <HeaderLink url={githubUrl}>Github</HeaderLink>
                </span>
                <span>
                    <HeaderLink url={linkedinUrl}>LinkedIn</HeaderLink>
                </span>
            </div>
        </header>
    )
}