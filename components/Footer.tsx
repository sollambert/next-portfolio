import FooterLink from "./FooterLink";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between p-6 sticky bottom-0 bg-black">
            <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <FooterLink
                    display="Projects"
                    url="/projects"
                    description="All of my best projects" />
                <FooterLink
                    display="About"
                    url="/about"
                    description="How this portfolio was created" />
            </div>
        </footer>
    )
}