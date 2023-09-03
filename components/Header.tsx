import { githubUrl, linkedinUrl } from "@/lib/constants";
import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-between text-yellow-400 text-2xl font-bold">
            <div className="m-4">
                <HeaderLink url="/">Home</HeaderLink>
            </div>
            <div className="m-4">
                <HeaderLink url={githubUrl}>Github</HeaderLink>
                <HeaderLink url={linkedinUrl}>LinkedIn</HeaderLink>
            </div>
        </header>
    )
}