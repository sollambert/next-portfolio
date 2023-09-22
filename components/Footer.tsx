import FooterLink from "./FooterLink";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between p-6 sticky bottom-0 dark:bg-black">
            <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <FooterLink
                    display="Projects"
                    url="/projects"
                    description="All of my best projects" />
                <FooterLink
                    display="Tech-Demos"
                    url="/demos"
                    description="Various tech demos to show off smaller projects" />
                <FooterLink
                    display="About"
                    url="/about"
                    description="How this portfolio was created" />
            </div>
        </footer>
    )
}