import Link from "next/link";

type Props = {
    name: string,
    displayName: string
}

export default function ProjectLink(props : Props) {



    return (
        <div>
            <Link href={`projects/${props.name}`}>{props.displayName}</Link>
        </div>
    )
}