import Link from "next/link"
import { CSSProperties } from "react"

type Props = {
    url: string,
    style?: CSSProperties
}

export default function HeaderLink(props : React.PropsWithChildren<Props>) {
    return (
        <div className="text-3xl font-bold mr-4 ml-4">
            <Link className="flex flex-row items-center space-between" href={props.url}>{props.children}</Link>
        </div>
    )
}