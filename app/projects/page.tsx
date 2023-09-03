import ProjectLink from "@/components/ProjectLink";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="border-white border-solid h-16 m-8 flex flex-col items-start justify-evenly text-blue-400 text-2xl font-bold">
            <ProjectLink name="cloud-quest" displayName="Cloud-Quest"/>
            <ProjectLink name="omi-live" displayName="Omi Live"/>
            <ProjectLink name="dnd-buddy" displayName="D&D Buddy"/>
        </div>
    )
}