import P5VideoConverter from "@/components/Demos/P5VideoConverter";
import Sudoku from "@/components/Demos/Sudoku";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const demo = (slug: string) => {
        switch (slug) {
            case 'p5-ascii':
                return (
                    <P5VideoConverter/>
                )
            case 'sudoku':
                return <Sudoku url={`http://localhost:${process.env.API_PORT}/api/sudoku`}/>
            default:
                <></>
        }
    }

    return (
        <>
            <div className="ml-10 mr-10 mt-4">
                {demo(params.slug)}
            </div>
        </>
    );
}