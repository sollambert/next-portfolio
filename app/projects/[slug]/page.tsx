'use client'

import Readme from "@/components/Readme";
import CloudQuest from "@/components/Projects/CloudQuest";
import { githubUrl, githubRawUrl } from "@/lib/constants";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {

    const projectUrl = `${githubUrl}${params.slug}`
    const readmeUrl = `${githubRawUrl}${params.slug}/main/README.md`
    const [readmeView, setReadmeView] = useState(false);
    const extraInfo = (slug: string) => {
        switch (slug) {
            case 'cloud-quest':
                return (
                    {name: "CloudQuest", cb: <CloudQuest />}
                )
            case 'dnd-buddy':
                return (
                    {name: "D&D Buddy", cb: undefined}
                )
            case 'omi-live':
                return (
                    {name: "Omi Live", cb: undefined}
                )
            default:
                <></>
        }
    }

    return (
        <>
            <div className="ml-10 mr-10 mt-4">
                <Link className="flex flex-row items-center space-between" href={projectUrl}>
                    <div className="text-3xl font-bold mr-2">
                        {extraInfo(params.slug)?.name}
                    </div>
                    <Image
                        src="/icons/github-black.svg"
                        alt="Github-logo"
                        className="dark:invert"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
                {extraInfo(params.slug)?.cb}
            </div>
            <div className="ml-10 mr-10 mt-2">
                {readmeView ?
                    <>
                        <button
                            className="
                                bg-white hover:bg-gray-100
                                text-gray-800 font-semibold
                                py-2 px-4
                                border border-gray-400 rounded shadow"
                            onClick={() => setReadmeView(!readmeView)}>
                            ReadMe v
                        </button>
                        <Readme url={readmeUrl} />
                    </>
                    :
                    <button
                        className="
                            bg-white hover:bg-gray-100
                            text-gray-800 font-semibold
                            py-2 px-4
                            border border-gray-400 rounded shadow"
                        onClick={() => setReadmeView(!readmeView)}>
                        {"ReadMe >"}
                    </button>}
            </div>
        </>
    );
}