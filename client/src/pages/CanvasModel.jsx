import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import LongSleeveShirt from './LongSleeveShirt'; // Import the new long sleeve shirt component
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import { useSnapshot } from 'valtio';
import state from '../store';

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          {snap.selectedShirt === 'tshirt' && <Shirt />}
          {snap.selectedShirt === 'longsleeve' && <LongSleeveShirt />}
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
