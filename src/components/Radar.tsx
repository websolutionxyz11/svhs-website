import { useEffect, useRef } from "react";
import { Camera, Geometry, Mesh, Program, Renderer, Transform, Vec3 } from "ogl";
import "./Radar.css";

const vertexShader = `
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;
uniform float uTime;
uniform vec3 uColor;
void main() {
  float pulse = 0.15 * sin(uTime * 2.0 + gl_FragCoord.y * 0.02);
  float alpha = 0.7 + pulse;
  gl_FragColor = vec4(uColor, alpha);
}
`;

function buildRadarGeometry(gl: WebGLRenderingContext) {
  const rings = 8;
  const segments = 64;
  const lines: number[] = [];

  for (let ring = 1; ring <= rings; ring += 1) {
    const radius = 0.9 + ring * 0.35;
    for (let segment = 0; segment <= segments; segment += 1) {
      const theta = (segment / segments) * Math.PI * 2;
      lines.push(radius * Math.cos(theta), radius * Math.sin(theta), 0);
      lines.push(radius * Math.cos(theta + Math.PI / segments), radius * Math.sin(theta + Math.PI / segments), 0);
    }
  }

  const spokes = 16;
  for (let i = 0; i < spokes; i += 1) {
    const theta = (i / spokes) * Math.PI * 2;
    lines.push(0, 0, 0);
    lines.push(Math.cos(theta) * 3.4, Math.sin(theta) * 3.4, 0);
  }

  return new Geometry(gl, {
    position: {
      size: 3,
      data: new Float32Array(lines),
    },
  });
}

export function Radar() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl as WebGLRenderingContext;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 45, near: 0.1, far: 1000 });
    camera.position.set(0, 0, 12);

    const scene = new Transform();
    const geometry = buildRadarGeometry(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Vec3(0.16, 0.72, 0.96) },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
      mode: gl.LINES,
    });
    mesh.setParent(scene);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / Math.max(height, 1) });
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let stopped = false;

    const renderFrame = () => {
      if (stopped) return;
      frame += 1;
      program.uniforms.uTime.value = frame * 0.0175;
      mesh.rotation.z = frame * 0.0014;
      mesh.rotation.x = Math.sin(frame * 0.0008) * 0.18;
      mesh.rotation.y = Math.cos(frame * 0.0012) * 0.12;
      renderer.render({ scene, camera });
      requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      stopped = true;
      window.removeEventListener("resize", resize);
      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div className="radar-frame">
      <div className="radar-shell" ref={containerRef} />
      <div className="radar-overlay">
        <p className="radar-eyebrow">Campus Motion Radar</p>
        <h3 className="radar-heading">Explore our school with a modern interactive scan.</h3>
        <p className="radar-copy">
          A high-performance WebGL radar visualization adds a polished, tech-forward touch to the homepage.
          Hover over the section to feel the motion.
        </p>
      </div>
    </div>
  );
}
