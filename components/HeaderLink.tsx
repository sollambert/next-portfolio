import Link from "next/link"
import { CSSProperties } from "react"

type Props = {
    url: string,
    style?: CSSProperties
}

export default function HeaderLink(props : React.PropsWithChildren<Props>) {
    return (
        <Link href={props.url}>{props.children}</Link>
    )
}