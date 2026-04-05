import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Dashboard from './components/Dashboard';
import Me from './components/Me';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import './App.css';

// 1. The 3D Background Logo
function ReactLogo() {
  return (
    <mesh>
      <torusGeometry args={[3, 0.05, 16, 100]} />
      <meshStandardMaterial color="#646cff" emissive="#646cff" emissiveIntensity={0.5} />
    </mesh>
  );
}

// 2. The Scene Component
function Scene() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <ReactLogo />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

// 3. The Main App Function (THIS WAS MISSING)
function App() {
  return (
    <main>
      <Dashboard />
      <Scene />
      <div id="me">
        <Me />
      </div>
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

export default App;