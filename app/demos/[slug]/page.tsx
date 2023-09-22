import P5VideoConverter from "@/components/Demos/P5VideoConverter";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const demo = (slug: string) => {
        switch (slug) {
            case 'p5-ascii':
                return (
                    <P5VideoConverter/>
                )
            default:
                <></>
        }
    }

    return (
        <>
            <div className="ml-10 mr-10">
                {demo(params.slug)}
            </div>
        </>
    );
}