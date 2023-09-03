'use client'

import dynamic from "next/dynamic";
import { Suspense } from "react";
import BounceLoader from "./BounceLoader";

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

type Props = {
    url: string,
    className?: string
}

const getMarkdown = async (url: string) => {
    let response = await fetch(url, { cache: "no-cache" });
    return response.text();
}


export default async function ClientMarkdown({ ...props }: Props) {
    const markdown = await getMarkdown(props.url);

    return (
        <MarkdownPreview source={markdown} {...props} />
    )
}