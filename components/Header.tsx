import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <header className="border-white border-solid h-16 w-screen flex items-center justify-evenly text-red-700 text-2xl font-bold">
            <HeaderLink url="/">Home</HeaderLink>
            <HeaderLink url="/projects">Projects</HeaderLink>
        </header>
    )
}