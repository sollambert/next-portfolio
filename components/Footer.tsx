import FooterLink from "./FooterLink";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col items-center justify-between p-6 sticky bottom-0 bg-stone-100 dark:bg-black empty:hidden">
                <div className="text-center hidden md:grid md:mb-0 md:grid-cols-4 md:text-left">
                    <FooterLink
                        display="Projects"
                        url="/projects"
                        description="All of my best projects" />
                    <FooterLink
                        display="Demos"
                        url="/demos"
                        description="Various tech demos showing off smaller ideas" />
                    <FooterLink
                        display="3D Models"
                        url="/models"
                        description="A gallery of my work with 3D modeling" />
                    <FooterLink
                        display="About"
                        url="/about"
                        description="How this portfolio was created" />
                </div>
                <HamburgerMenu />
                <Image
                    src="/Tux.svg"
                    alt="secret tux"
                    width={32}
                    height={32}
                    hidden={true}
                    priority
                />
            </footer>
        </>
    )
}