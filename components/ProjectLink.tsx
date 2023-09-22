import Link from "next/link";

type Props = {
    name: string,
    displayName: string,
    directory: string
}

export default function ProjectLink(props: React.PropsWithChildren<Props>) {



    return (
        <div className="px-5 py-4 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href={`${props.directory}/${props.name}`}>
                {props.displayName}
                {props.children}
            </Link>
        </div>
    )
}