import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Cyber Core Mesh
function CyberCore() {
  const meshRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.12;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.35;
      innerRef.current.rotation.z += delta * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.18;
      ringRef.current.rotation.y += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.2;
      ring2Ref.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Cyber Geodesic Wireframe Sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshStandardMaterial
          color="#00ff66"
          wireframe
          transparent
          opacity={0.35}
          emissive="#00ff66"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.8}
          emissive="#00f0ff"
          emissiveIntensity={1.2}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting Tech Ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#00ff66"
          emissive="#00ff66"
          emissiveIntensity={1.0}
        />
      </mesh>

      {/* Orbiting Tech Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.9}
        />
      </mesh>
    </group>
  );
}

// Interconnected Particle Constellation
function CyberParticles({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorGreen = new THREE.Color('#00ff66');
    const colorCyan = new THREE.Color('#00f0ff');
    const tempColor = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.5 + 1.2;
      const sinPhi = Math.sin(phi);

      pos[i * 3] = r * sinPhi * Math.cos(theta);
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      tempColor.lerpColors(colorGreen, colorCyan, Math.random());
      col[i * 3] = tempColor.r;
      col[i * 3 + 1] = tempColor.g;
      col[i * 3 + 2] = tempColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

// Mouse Parallax Wrapper
function SceneContainer() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle parallax towards mouse pointer
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (-state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <CyberCore />
        <CyberParticles count={140} />
      </Float>
    </group>
  );
}

// Fallback CSS/SVG representation if WebGL or Canvas fails
function FallbackCyberVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative">
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border border-cyber-green/40 flex items-center justify-center animate-spin-slow shadow-neon-green">
        <div className="absolute inset-4 rounded-full border border-dashed border-cyber-cyan/50 animate-reverse-spin"></div>
        <div className="w-24 h-24 rounded-full bg-cyber-green/10 border border-cyber-green/60 flex items-center justify-center backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full bg-cyber-cyan/20 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[10px] font-mono text-cyber-green bg-[#05090f] px-1 border border-cyber-border">
          NODE://SYNC
        </div>
      </div>
    </div>
  );
}

export const InteractiveScene = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return <FallbackCyberVisual />;
  }

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[380px] lg:min-h-[460px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]} // Performance balance
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff66" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#00f0ff" />
        <Suspense fallback={null}>
          <SceneContainer />
        </Suspense>
      </Canvas>

      {/* Decorative Cyber Overlays */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-cyber-green/70 flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></span>
        <span>NEURAL_NODE::ACTIVE [3D_ENGINE]</span>
      </div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cyber-text-muted pointer-events-none">
        ROTATE 360° | POINTER_TRACK
      </div>
    </div>
  );
};
