import './Ambient3DBackground.css';

/**
 * Ambient3DBackground — Hardware-accelerated 3D floating background system
 * Tailored for About, NRI, Blogs, and Contact pages with elegant depth.
 */
export default function Ambient3DBackground({ variant = 'about' }) {
  return (
    <div className={`ambient-3d-scene ambient-3d-${variant}`} aria-hidden="true">
      {/* 3D Depth Grid Container */}
      <div className="ambient-3d-grid" />

      {/* Floating 3D Objects */}
      <div className="ambient-3d-objects">
        {/* 3D Object 1: Rotating Polyhedron / Cube Frame */}
        <div className="ambient-3d-shape shape-cube">
          <div className="cube-face face-front" />
          <div className="cube-face face-back" />
          <div className="cube-face face-right" />
          <div className="cube-face face-left" />
          <div className="cube-face face-top" />
          <div className="cube-face face-bottom" />
        </div>

        {/* 3D Object 2: Torus / Glass Orbital Ring */}
        <div className="ambient-3d-shape shape-ring shape-ring-1" />
        <div className="ambient-3d-shape shape-ring shape-ring-2" />

        {/* 3D Object 3: Floating Translucent Spheres */}
        <div className="ambient-3d-shape shape-sphere sphere-gold" />
        <div className="ambient-3d-shape shape-sphere sphere-sky" />
        <div className="ambient-3d-shape shape-sphere sphere-navy" />

        {/* 3D Object 4: Floating Glass Diamond Prisms */}
        <div className="ambient-3d-shape shape-prism prism-1" />
        <div className="ambient-3d-shape shape-prism prism-2" />
      </div>
    </div>
  );
}
