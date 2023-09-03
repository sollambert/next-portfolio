'use client'

import Readme from "@/components/Readme";
import CloudQuest from "@/components/ProjectHeaders/CloudQuest";
import { githubRawUrl } from "@/lib/constants";
import { useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const url = `${githubRawUrl}${params.slug}/main/README.md`
    const [readmeView, setReadmeView] = useState(false);
    const extraInfo = (slug: string) => {
        switch (slug) {
            case 'cloud-quest':
                return (
                    <CloudQuest />
                )
            case 'dnd-buddy':
                return (
                    <>
                        D&D-Buddy
                    </>
                )
            case 'omi-live':
                return (
                    <>
                        Omi-Live
                    </>
                )
            default:
                <></>
        }
    }

    // ts-expect-error Async Server Component
    return (
        <>
            <div className="ml-10 mr-10">
                {extraInfo(params.slug)}
            </div>
            <div className="ml-10 mr-10 mt-2">
                {readmeView ?
                    <>
                        <button
                            className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}
                            onClick={() => setReadmeView(!readmeView)}>
                            ReadMe v
                        </button>
                        <Readme url={url} />
                    </>
                    :
                    <button
                        className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}
                        onClick={() => setReadmeView(!readmeView)}>
                        {"ReadMe >"}
                    </button>}
            </div>
        </>
    );
}