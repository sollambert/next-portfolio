'use client'

import CloudQuestDocsPage from "@/app/docs/cloud-quest/page";
import { useState } from "react";

export default function CloudQuest() {

    const [docsView, setDocsView] = useState(false);

    function viewDocs() {
        setDocsView(!docsView);
    }

    return (
        <>
            <h1 className="text-6xl" style={{color: "#92F84D"}}>
                Cloud-Quest
            </h1>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-2"
                onClick={() => viewDocs()}>Game Editor Documentation {docsView ? 'v' : '>'}</button>
            {docsView ? <CloudQuestDocsPage /> : ''}
        </>
    )
}