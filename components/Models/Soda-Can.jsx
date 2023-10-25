import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SodaCan(props) {
    const { nodes, materials } = useGLTF(props.glbUrl);
    useGLTF.preload(props.glbUrl);
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials["Material.001"]}
                scale={15}
                position={[0,-1,0]}
            />
        </group>
    );
}
