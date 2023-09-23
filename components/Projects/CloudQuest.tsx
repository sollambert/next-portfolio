'use client'

import CloudQuestDocsPage from "@/app/docs/cloud-quest/page";
import { cloudQuestUrl } from "@/lib/constants";
import { useState } from "react";
import Link from "next/link";

export default function CloudQuest() {

    const [docsView, setDocsView] = useState(false);

    function viewDocs() {
        setDocsView(!docsView);
    }

    return (
        <div>
            <div>
                <Link
                    href={cloudQuestUrl}
                    className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-2">
                        {`Live Deployment (desktop only)`}
                    </button>
                </Link>
            </div>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-2"
                onClick={() => viewDocs()}>Game Editor Documentation {docsView ? 'v' : '>'}</button>
            {docsView ? <CloudQuestDocsPage /> : ''}
        </div>
    )
}