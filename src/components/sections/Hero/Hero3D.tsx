"use client";

import { ContactShadows, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function useCoffeeCupGeometry() {
  return useMemo(() => {
    const bodyProfile = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.1, 0.0),
      new THREE.Vector2(1.02, 0.08),
      new THREE.Vector2(1.18, 0.45),
      new THREE.Vector2(1.2, 1.3),
      new THREE.Vector2(1.15, 2.7),
      new THREE.Vector2(1.08, 3.1),
      new THREE.Vector2(0.95, 3.3),
      new THREE.Vector2(0.8, 3.48),
      new THREE.Vector2(0.1, 3.55),
    ];

    const innerProfile = [
      new THREE.Vector2(0.1, 0.12),
      new THREE.Vector2(0.72, 0.16),
      new THREE.Vector2(0.92, 0.6),
      new THREE.Vector2(0.96, 1.9),
      new THREE.Vector2(0.88, 3.0),
      new THREE.Vector2(0.72, 3.22),
      new THREE.Vector2(0.25, 3.3),
    ];

    const liquidProfile = [
      new THREE.Vector2(0.16, 0.18),
      new THREE.Vector2(0.7, 0.2),
      new THREE.Vector2(0.9, 0.46),
      new THREE.Vector2(1.0, 1.25),
      new THREE.Vector2(0.98, 2.2),
      new THREE.Vector2(0.9, 2.82),
      new THREE.Vector2(0.66, 3.12),
      new THREE.Vector2(0.2, 3.18),
    ];

    return {
      body: new THREE.LatheGeometry(bodyProfile, 120),
      inner: new THREE.LatheGeometry(innerProfile, 120),
      liquid: new THREE.LatheGeometry(liquidProfile, 120),
    };
  }, []);
}

function CoffeeCupModel() {
  const group = useRef<THREE.Group>(null);
  const splashRef = useRef<THREE.Mesh>(null);
  const { body, inner, liquid } = useCoffeeCupGeometry();

  const splashCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.45, 0.0, 0.35),
        new THREE.Vector3(-1.8, 0.8, 0.2),
        new THREE.Vector3(-1.95, 2.0, -0.5),
        new THREE.Vector3(-1.6, 2.8, 0.2),
        new THREE.Vector3(-0.4, 3.2, 0.9),
        new THREE.Vector3(0.75, 3.45, 1.2),
        new THREE.Vector3(2.0, 3.0, 0.9),
        new THREE.Vector3(2.9, 2.2, 0.4),
        new THREE.Vector3(3.15, 1.1, -0.2),
        new THREE.Vector3(2.75, -0.2, -0.4),
        new THREE.Vector3(2.1, -1.1, 0.45),
        new THREE.Vector3(0.7, -2.0, 0.75),
        new THREE.Vector3(-0.6, -2.3, 0.7),
        new THREE.Vector3(-1.6, -1.7, 0.2),
        new THREE.Vector3(-1.9, -0.5, 0.15),
        new THREE.Vector3(-1.45, 0.0, 0.35),
      ]),
    [],
  );

  const splashGeometry = useMemo(() => new THREE.TubeGeometry(splashCurve, 260, 0.38, 20, false), [splashCurve]);

  const droplets = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        position: [
          -1.55 + i * 0.46,
          -0.4 + (i % 3) * 0.8,
          -0.2 + (i % 2) * 0.7,
        ] as [number, number, number],
        radius: 0.09 + (i % 4) * 0.04,
      })),
    [],
  );

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (!group.current) return;

    group.current.rotation.y = state.pointer.x * 0.5 + elapsed * 0.18;
    group.current.rotation.x = 0.08 + state.pointer.y * 0.35;
    group.current.rotation.z = Math.sin(elapsed * 0.7) * 0.12;
    group.current.position.y = Math.sin(elapsed * 1.1) * 0.12;
    group.current.position.x = state.pointer.x * 0.22;

    if (splashRef.current) {
      splashRef.current.rotation.z = Math.sin(elapsed * 1.2) * 0.08;
      splashRef.current.rotation.x = 0.17 + state.pointer.y * 0.16;
    }
  });

  return (
    <group ref={group} position={[0, -0.15, 0]}>
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <primitive object={body} attach="geometry" />
        <meshPhysicalMaterial color="#f8f6f3" roughness={0.8} metalness={0.06} clearcoat={0.08} />
      </mesh>

      <mesh position={[0, 0.02, 0]} castShadow>
        <primitive object={inner} attach="geometry" />
        <meshStandardMaterial color="#f4f0ed" roughness={0.72} metalness={0.04} />
      </mesh>

      <mesh position={[0, 3.35, 0]} castShadow>
        <cylinderGeometry args={[1.04, 1.08, 0.22, 100]} />
        <meshPhysicalMaterial color="#0d0d0f" metalness={0.9} roughness={0.22} clearcoat={0.8} envMapIntensity={1.4} />
      </mesh>

      <mesh position={[0, 3.48, 0]}>
        <cylinderGeometry args={[0.88, 0.96, 0.12, 100]} />
        <meshStandardMaterial color="#171414" roughness={0.38} metalness={0.92} />
      </mesh>

      <mesh position={[0, 2.65, 0]} castShadow>
        <cylinderGeometry args={[1.18, 1.24, 1.08, 90]} />
        <meshPhysicalMaterial color="#d7ae71" roughness={0.9} metalness={0.05} clearcoat={0.1} />
      </mesh>

      <mesh position={[0, 2.72, 0]} castShadow>
        <cylinderGeometry args={[1.38, 1.43, 0.12, 90]} />
        <meshStandardMaterial color="#c9955d" roughness={0.9} metalness={0.06} />
      </mesh>

      <mesh position={[0, 2.48, 0]} castShadow>
        <cylinderGeometry args={[1.12, 1.18, 0.18, 90]} />
        <meshStandardMaterial color="#d6b485" roughness={0.9} metalness={0.08} />
      </mesh>

      <mesh position={[0, 0.7, 0]} castShadow>
        <primitive object={liquid} attach="geometry" />
        <meshPhysicalMaterial color="#4a220f" roughness={0.26} metalness={0.05} clearcoat={0.8} transmission={0.02} thickness={1.2} envMapIntensity={1.7} />
      </mesh>

      <mesh ref={splashRef} geometry={splashGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial color="#552712" roughness={0.2} metalness={0.08} clearcoat={0.7} transmission={0.02} thickness={1.4} envMapIntensity={1.8} />
      </mesh>

      {droplets.map((droplet, index) => (
        <Float key={index} position={droplet.position} speed={1.2 + index * 0.09} rotationIntensity={0.35} floatIntensity={0.8}>
          <mesh castShadow>
            <sphereGeometry args={[droplet.radius, 32, 32]} />
            <meshPhysicalMaterial color={index % 2 === 0 ? "#4b220f" : "#7a3d1a"} roughness={0.28} metalness={0.04} clearcoat={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[620px] w-full overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.92),rgba(244,236,227,0.88)_35%,rgba(224,208,191,0.86)_60%,rgba(220,203,182,0.9)_100%)]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.1, 7.2], fov: 22 }}>
        <color attach="background" args={["#e9e1d7"]} />
        <PerspectiveCamera makeDefault position={[0, 0.35, 7.2]} fov={22} />
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 7, 5]} intensity={2.5} color="#fff1d7" castShadow />
        <spotLight position={[-2, 8, 7]} angle={0.38} penumbra={1} intensity={2} color="#d89d5b" />
        <spotLight position={[0, 2, 6]} angle={0.52} penumbra={0.75} intensity={1.7} color="#f8e0bd" />
        <CoffeeCupModel />
        <ContactShadows position={[0, -2.9, 0]} opacity={0.4} scale={8.5} blur={2.4} far={6} />
      </Canvas>
    </div>
  );
}
