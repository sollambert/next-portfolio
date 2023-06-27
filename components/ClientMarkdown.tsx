'use client'

import dynamic from "next/dynamic";

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

type Props = {
    source: string,
    className?: string
}

export default function ClientMarkdown({...props} : Props) {
    return (
        <MarkdownPreview {...props} />
    )
}