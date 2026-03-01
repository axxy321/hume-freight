import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleSphere = (props) => {
    const ref = useRef();

    // Create an expanding sphere of particles to represent global logistics
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#c29b57" /* Accent Gold */
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const ThreeScene = () => {
    return (
        <div className="three-scene-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 2] }}>
                <React.Suspense fallback={null}>
                    <ParticleSphere />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeScene;
