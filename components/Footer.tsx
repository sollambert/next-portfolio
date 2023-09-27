import FooterLink from "./FooterLink";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between p-6 sticky bottom-0 bg-stone-100 dark:bg-black">
            <div className="grid text-center md:mb-0 md:grid-cols-4 md:text-left">
                <FooterLink
                    display="Projects"
                    url="/projects"
                    description="All of my best projects" />
                <FooterLink
                    display="Demos"
                    url="/demos"
                    description="Various tech demos showing off smaller ideas" />
                <FooterLink
                    display="About"
                    url="/about"
                    description="How this portfolio was created" />
            </div>
            <Image
                src="/Tux.svg"
                alt="secret tux"
                width={32}
                height={32}
                hidden={true}
                priority
            />
        </footer>
    )
}