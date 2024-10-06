import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/TShirtal.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Apply color transition on the material
  useFrame((state, delta) => easing.dampC(materials.Top_shd.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  // Debugging information for positioning decals
  console.log("Decal position test:", snap.isLogoTexture, snap.isFullTexture);

  return (
    <group key={stateString}>
      {nodes && nodes["T-Shirt"] && materials && materials.Top_shd && (
        <mesh
          castShadow
          geometry={nodes["T-Shirt"].geometry}
          material={materials.Top_shd}
          material-roughness={1}
          dispose={null}
        >
          {snap.isFullTexture && fullTexture && (
            <Decal 
              position={[0, 0, 0]} // You might need to adjust this
              rotation={[0, 0, 0]}
              scale={1} // Adjust based on your model size
              map={fullTexture}
            />
          )}

          {snap.isLogoTexture && logoTexture && (
            <Decal 
            position={[0, 0.2, 0.2]} // Try larger offsets to see if it appears
            rotation={[0, 0, 0]}
            scale={0.5} // Increase the scale to see if it shows up
            map={fullTexture}
          />

          
          )}
        </mesh>
      )}
    </group>
  );
};

export default LongSleeveShirt;
