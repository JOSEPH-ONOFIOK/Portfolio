import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle system - Neural network visualization
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities: THREE.Vector3[] = [];

    const colorPalette = [
      new THREE.Color(0x6366f1), // Primary purple
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0xa855f7), // Violet
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0x8b5cf6), // Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 25 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;

      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ));
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.x += sin(time * 0.5 + position.y * 0.1) * 0.5;
          pos.y += cos(time * 0.3 + position.x * 0.1) * 0.5;
          pos.z += sin(time * 0.4 + position.z * 0.1) * 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Connection lines between nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineColors = new Float32Array(particleCount * particleCount * 6);
    
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Geometric wireframe structures
    const icosahedronGeometry = new THREE.IcosahedronGeometry(8, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, wireframeMaterial);
    icosahedron.position.set(-15, 5, -10);
    scene.add(icosahedron);

    const torusGeometry = new THREE.TorusGeometry(5, 1.5, 16, 50);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(18, -8, -5);
    scene.add(torus);

    const octahedronGeometry = new THREE.OctahedronGeometry(6, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octaMaterial);
    octahedron.position.set(12, 12, -15);
    scene.add(octahedron);

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);

      // Update particle positions
      const positionsArray = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positionsArray[i3] += velocities[i].x;
        positionsArray[i3 + 1] += velocities[i].y;
        positionsArray[i3 + 2] += velocities[i].z;

        const dist = Math.sqrt(
          positionsArray[i3] ** 2 + 
          positionsArray[i3 + 1] ** 2 + 
          positionsArray[i3 + 2] ** 2
        );
        if (dist > 50 || dist < 10) {
          velocities[i].multiplyScalar(-1);
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update connections
      let lineIndex = 0;
      const connectionDistance = 8;
      for (let i = 0; i < Math.min(particleCount, 100); i++) {
        for (let j = i + 1; j < Math.min(particleCount, 100); j++) {
          const i3 = i * 3;
          const j3 = j * 3;
          const dx = positionsArray[i3] - positionsArray[j3];
          const dy = positionsArray[i3 + 1] - positionsArray[j3 + 1];
          const dz = positionsArray[i3 + 2] - positionsArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            linePositions[lineIndex++] = positionsArray[i3];
            linePositions[lineIndex++] = positionsArray[i3 + 1];
            linePositions[lineIndex++] = positionsArray[i3 + 2];
            linePositions[lineIndex++] = positionsArray[j3];
            linePositions[lineIndex++] = positionsArray[j3 + 1];
            linePositions[lineIndex++] = positionsArray[j3 + 2];

            const alpha = 1 - dist / connectionDistance;
            const colorIndex = lineIndex - 6;
            for (let k = 0; k < 6; k++) {
              lineColors[colorIndex + k] = alpha;
            }
          }
        }
      }
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIndex), 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, lineIndex), 3));

      // Update shader uniforms
      (particleMaterial.uniforms.time as { value: number }).value = time;

      // Rotate geometric shapes
      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.005;
      torus.rotation.x += 0.004;
      torus.rotation.z += 0.003;
      octahedron.rotation.y += 0.004;
      octahedron.rotation.z += 0.002;

      // Camera follows mouse slightly
      camera.position.x += (mouseRef.current.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icosahedronGeometry.dispose();
      wireframeMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      octahedronGeometry.dispose();
      octaMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      data-testid="three-hero-canvas"
    />
  );
}
