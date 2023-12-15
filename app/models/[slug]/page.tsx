'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { githubRawUrl } from "@/lib/constants";
import { SodaCan } from '@/components/Models/Soda-Can'
import { Mushroom } from '@/components/Models/Mushroom'
import { TakeoutContainer } from '@/components/Models/Takeout-Container'

export default function ProjectPage({ params }: { params: { slug: string } }) {

    const glbUrl = `${githubRawUrl}Model-Gallery/main/${params.slug}.glb`

    const getModel = (slug: string) => {
        switch (slug) {
            case 'soda-can':
                return (
                    <SodaCan glbUrl={glbUrl} height="100%"/>
                )
            case 'takeout-container':
                return (
                    <TakeoutContainer glbUrl={glbUrl} height="100%"/>
                )
            case 'mushroom':
                return (
                    <Mushroom glbUrl={glbUrl} height="100%"/>
                )
        }
        return <></>
    }
    return (
        <Canvas
            className="border-white border-solid
                my-4
                lg:w-1/2
                flex flex-col items-start justify-evenly
                text-blue-400 text-2xl font-bold"
            style={{height: "75vh"}}>
            <Suspense fallback={null}>
                {getModel(params.slug)}
                <OrbitControls />
                <Environment preset="sunset" background />
            </Suspense>
        </Canvas>
    )
}