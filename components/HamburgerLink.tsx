
import Link from "next/link"

type Props = {
    url: string,
    display: string,
    onClick?: () => void
}

export default function HamburgerLink(props: Props) {
    return (
        <Link
            href={props.url}
            onClick={props.onClick}
        >
            <h2 className={`rounded px-2 my-1 w-full border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 text-2xl font-semibold`}>
                {props.display}
            </h2>
        </Link>
    )
}