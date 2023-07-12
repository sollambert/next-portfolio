import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="border-white border-solid h-16 m-8 flex flex-col items-start justify-evenly text-blue-400 text-2xl font-bold">
            <Link href="projects/cloud-quest">CloudQuest</Link>
            <Link href="projects/dnd-buddy">DnD Buddy</Link>
        </div>
    )
}