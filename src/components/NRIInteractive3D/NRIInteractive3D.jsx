import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './NRIInteractive3D.css';

// ── Realistic Continental Geometry Points for 3D Earth ──
const CONTINENTS = [
  // India & South Asia
  [
    { lat: 35, lon: 74 }, { lat: 30, lon: 80 }, { lat: 26, lon: 88 }, { lat: 22, lon: 89 },
    { lat: 18, lon: 84 }, { lat: 13, lon: 80 }, { lat: 8, lon: 77 }, { lat: 15, lon: 73 },
    { lat: 23, lon: 68 }, { lat: 28, lon: 70 }, { lat: 35, lon: 74 }
  ],
  // Middle East / UAE
  [
    { lat: 32, lon: 35 }, { lat: 30, lon: 48 }, { lat: 25, lon: 55 }, { lat: 22, lon: 59 },
    { lat: 15, lon: 52 }, { lat: 12, lon: 44 }, { lat: 20, lon: 39 }, { lat: 28, lon: 34 }, { lat: 32, lon: 35 }
  ],
  // Europe & UK
  [
    { lat: 58, lon: -5 }, { lat: 55, lon: 10 }, { lat: 60, lon: 25 }, { lat: 45, lon: 28 },
    { lat: 40, lon: 20 }, { lat: 36, lon: -5 }, { lat: 43, lon: -9 }, { lat: 48, lon: -4 },
    { lat: 54, lon: -3 }, { lat: 58, lon: -5 }
  ],
  // East Asia & Singapore / SE Asia
  [
    { lat: 45, lon: 130 }, { lat: 38, lon: 122 }, { lat: 25, lon: 120 }, { lat: 12, lon: 109 },
    { lat: 1, lon: 104 }, { lat: 8, lon: 98 }, { lat: 20, lon: 97 }, { lat: 35, lon: 105 },
    { lat: 45, lon: 130 }
  ],
  // Africa
  [
    { lat: 35, lon: -5 }, { lat: 32, lon: 32 }, { lat: 12, lon: 51 }, { lat: -5, lon: 40 },
    { lat: -34, lon: 26 }, { lat: -33, lon: 18 }, { lat: 5, lon: 8 }, { lat: 15, lon: -17 },
    { lat: 35, lon: -5 }
  ],
  // North America / USA
  [
    { lat: 60, lon: -140 }, { lat: 55, lon: -60 }, { lat: 45, lon: -65 }, { lat: 28, lon: -80 },
    { lat: 25, lon: -97 }, { lat: 32, lon: -117 }, { lat: 48, lon: -124 }, { lat: 60, lon: -140 }
  ],
  // South America
  [
    { lat: 10, lon: -75 }, { lat: -5, lon: -35 }, { lat: -23, lon: -42 }, { lat: -54, lon: -68 },
    { lat: -35, lon: -73 }, { lat: -5, lon: -80 }, { lat: 10, lon: -75 }
  ],
  // Australia
  [
    { lat: -12, lon: 132 }, { lat: -20, lon: 148 }, { lat: -38, lon: 145 }, { lat: -34, lon: 115 },
    { lat: -20, lon: 115 }, { lat: -12, lon: 132 }
  ]
];

// ── Country Hub Details with Full Portfolio Modal Data ──
const GLOBAL_HUBS = [
  {
    id: 'dubai',
    nickname: 'UAE',
    city: 'Dubai',
    countryName: 'United Arab Emirates',
    continent: 'Middle East',
    benefit: 'Zero Tax on Remittances & Rapid Repatriation into India',
    flag: '🇦🇪',
    lat: 25.2,
    lon: 55.3,
    orbitAngle: 215,
    tag: 'GCC Gateway',
    modalData: {
      badge: 'GCC & UAE PORTFOLIO CORRIDOR',
      title: 'UAE & Gulf NRI Wealth Advisory: Maximizing Tax-Free Remittances into India',
      meta: 'FEMA Compliant · NRE Repatriable · Zero Indian Tax on Inward Remittance',
      highlights: [
        { label: 'Repatriation', value: '100% Principal & Gains' },
        { label: 'Indian Tax on NRE', value: '0% (Tax-Free Interest)' },
        { label: 'Minimum Ticket', value: 'Flexible SIP / Lump Sum' },
        { label: 'Turnaround', value: '24-48 Hours Digital Setup' }
      ],
      overview: 'For NRIs residing in the UAE (Dubai, Abu Dhabi, Sharjah) and across the GCC, KDJ Wealth provides an institutional-grade investment gateway to channel tax-free Gulf dirham earnings directly into India\'s booming capital markets.',
      allocations: [
        { asset: 'India Large & Multi-Cap Equity Funds', pct: '40%', rationale: 'Capture India\'s infrastructure, banking, and consumption boom.' },
        { asset: 'High-Yield Target Maturity & Arbitrage', pct: '25%', rationale: 'Capital preservation with tax-efficient returns higher than Gulf bank deposits.' },
        { asset: 'Fractional Real Estate & Grade-A REITs', pct: '20%', rationale: 'Regular quarterly dividend yields backed by commercial assets in Bengaluru & Mumbai.' },
        { asset: 'SIF Funds & Tactical Opportunities', pct: '15%', rationale: 'Specialized Investment Funds capturing emerging mid-market leaders.' }
      ],
      compliance: [
        'NRE Account Structure: Full liquidity with unlimited repatriation back to UAE banks without requiring RBI approval.',
        'Zero Tax in India on NRE interest income under Section 10(4) of the Indian Income Tax Act.',
        'End-to-end 15CA/15CB documentation handled directly by our in-house compliance desk for seamless fund movement.',
        '100% Digital Paperless KYC with UAE Emirates ID and Passport verification.'
      ]
    }
  },
  {
    id: 'singapore',
    nickname: 'SG',
    city: 'Singapore',
    countryName: 'Singapore',
    continent: 'Asia-Pacific',
    benefit: 'Seamless Digital KYC & Instant NRE/NRO Setup',
    flag: '🇸🇬',
    lat: 1.35,
    lon: 103.8,
    orbitAngle: 40,
    tag: 'APAC Hub',
    modalData: {
      badge: 'APAC WEALTH ADVISORY',
      title: 'Singapore & Southeast Asia NRI Advisory: High-Growth India Allocation',
      meta: 'DTAA Tax Optimized · Fast-Track Digital KYC · Currency Hedging',
      highlights: [
        { label: 'DTAA Status', value: 'Singapore-India Treaty' },
        { label: 'KYC Mode', value: '100% Paperless Digital' },
        { label: 'Asset Focus', value: 'Equity & Tech Leaders' },
        { label: 'Repatriation', value: 'Direct SGD/USD Remit' }
      ],
      overview: 'Connecting tech leaders, banking professionals, and entrepreneurs across Singapore and Southeast Asia with India\'s high-growth equities and institutional debt portfolios.',
      allocations: [
        { asset: 'India Tech & Manufacturing Equities', pct: '45%', rationale: 'Participate in India\'s electronics, semi-conductor, and manufacturing super-cycle.' },
        { asset: 'Dynamic Asset Allocation Funds', pct: '30%', rationale: 'Automatic market-timing strategy shifting between equity and debt based on P/E.' },
        { asset: 'Mid-Cap & Small-Cap Alpha SIPs', pct: '15%', rationale: 'High-alpha wealth compounding with systematic monthly Singapore dollar investments.' },
        { asset: 'Sovereign & Gold Backed Securities', pct: '10%', rationale: 'Portfolio inflation hedge with sovereign liquidity.' }
      ],
      compliance: [
        'India-Singapore Double Taxation Avoidance Agreement (DTAA) prevents double taxation on dividends and capital gains.',
        'Tax Residency Certificate (TRC) filing handled to minimize withholding tax (TDS) in India.',
        'Same-day digital NRE/NRO investment activation with Singpass / digital ID verification.',
        'Dedicated wealth manager assigned in Asia-Pacific time zones for real-time portfolio reviews.'
      ]
    }
  },
  {
    id: 'london',
    nickname: 'UK',
    city: 'London',
    countryName: 'United Kingdom',
    continent: 'Europe',
    benefit: 'FEMA-Compliant High-Yield Mutual Fund Baskets',
    flag: '🇬🇧',
    lat: 51.5,
    lon: -0.12,
    orbitAngle: 140,
    tag: 'Europe Hub',
    modalData: {
      badge: 'UK & EUROPE WEALTH',
      title: 'UK & European NRI Portfolio Management: Sterling-to-Rupee Compounding',
      meta: 'HMRC / FEMA Aligned · High Yield vs UK Gilt · Succession Protected',
      highlights: [
        { label: 'Yield Advantage', value: 'India Equity 12-15% CAGR' },
        { label: 'HMRC Tax Credit', value: 'Foreign Tax Credit Relief' },
        { label: 'Succession Planning', value: 'Nomination & Trust Setup' },
        { label: 'Portfolio Review', value: 'Quarterly Video Review' }
      ],
      overview: 'Helping British and European NRIs outperform low European fixed-income returns by systematically building diversified portfolios in India while adhering strictly to HMRC self-assessment norms.',
      allocations: [
        { asset: 'Bluechip Large-Cap & Multi-Asset Baskets', pct: '35%', rationale: 'Stable bedrock of top 50 Indian corporations with high corporate governance.' },
        { asset: 'Banking, Financials & Energy Transition', pct: '30%', rationale: 'Direct participation in India\'s credit expansion and green energy infrastructure.' },
        { asset: 'Successor / Estate Protected Trust Assets', pct: '20%', rationale: 'Structures ensuring smooth cross-border generational wealth transfer.' },
        { asset: 'NRE Fixed Deposits & Liquid Debt', pct: '15%', rationale: 'Fixed returns significantly beating UK standard bank deposit rates.' }
      ],
      compliance: [
        'DTAA relief mechanism allows claiming Foreign Tax Credit (FTC) on UK self-assessments.',
        'Clear separation of Remittance Basis vs Arising Basis considerations for UK residents.',
        'Simplified repatriation via Form 15CA/CB documentation provided directly by KDJ Wealth.',
        'Family nomination & succession planning built into every portfolio.'
      ]
    }
  },
  {
    id: 'usa',
    nickname: 'US',
    city: 'New York',
    countryName: 'United States',
    continent: 'North America',
    benefit: 'Direct Access to India Tech & Infrastructure Boom',
    flag: '🇺🇸',
    lat: 40.7,
    lon: -74.0,
    orbitAngle: 320,
    tag: 'Americas Hub',
    modalData: {
      badge: 'NORTH AMERICA CORRIDOR',
      title: 'US & Canadian NRI Advisory: FATCA & PFIC-Safe Indian Investment Portfolios',
      meta: 'FATCA Compliant · PFIC Safe Structuring · US Dollar to INR Growth',
      highlights: [
        { label: 'FATCA Status', value: '100% Compliant Reporting' },
        { label: 'FBAR / Form 8938', value: 'Annual Statement Support' },
        { label: 'Structure', value: 'Direct Equity & Special Funds' },
        { label: 'Advisory Desk', value: 'US Eastern / Pacific Support' }
      ],
      overview: 'Overcoming US FATCA reporting complexities and IRS Passive Foreign Investment Company (PFIC) restrictions with compliant structures that let American NRIs capture India\'s growth.',
      allocations: [
        { asset: 'Direct Equity & Discretionary PMS Portfolios', pct: '40%', rationale: 'PFIC-exempt structures directly holding high-growth Indian bluechips.' },
        { asset: 'Large-Cap High Growth Indian Corporates', pct: '30%', rationale: 'Global market leaders with strong US-dollar earning balance sheets.' },
        { asset: 'Infrastructure Trusts & Commercial Real Estate', pct: '20%', rationale: 'Tangible asset backing with attractive inflation-hedged yields.' },
        { asset: 'Liquid NRE Capital Reserve', pct: '10%', rationale: 'Ready capital for market dip buying opportunities.' }
      ],
      compliance: [
        'FATCA compliant asset management companies (AMCs) providing ready Form 8938 and FBAR documentation.',
        'Advisory designed to help clients navigate IRS Section 1291 PFIC taxation rules.',
        'Seamless dollar-to-rupee inward conversion through authorized NRE banking channels.',
        'Dedicated virtual consultation with KDJ Wealth US-NRI advisory specialists.'
      ]
    }
  }
];

export default function NRIInteractive3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // 3D Earth Orientation state
  const [rotY, setRotY] = useState(45);
  const [rotX, setRotX] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHub, setActiveHub] = useState(null);
  const [hoveredHub, setHoveredHub] = useState(null);
  const [modalHub, setModalHub] = useState(null);

  // Physics and smooth tracking refs
  const currentRotY = useRef(45);
  const currentRotX = useRef(15);
  const targetRotY = useRef(45);
  const targetRotX = useRef(15);
  const autoSpinRef = useRef(true);
  const dragStartRef = useRef({ x: 0, y: 0, startRotX: 15, startRotY: 45 });
  const resumeTimerRef = useRef(null);

  // ── Render Real 3D Earth Canvas ──
  const drawEarth = useCallback((angleY, angleX) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const R = Math.min(width, height) * 0.44; // Sphere radius

    ctx.clearRect(0, 0, width, height);

    // 1. Atmosphere Rim Halo
    const atmosGrad = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.25);
    atmosGrad.addColorStop(0, 'rgba(8, 120, 201, 0.18)');
    atmosGrad.addColorStop(0.5, 'rgba(200, 155, 60, 0.12)');
    atmosGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = atmosGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // 2. Realistic Earth Sphere Base (Light Luxury Ocean with Specular Shading)
    const oceanGrad = ctx.createRadialGradient(
      cx - R * 0.35, cy - R * 0.35, R * 0.1,
      cx, cy, R
    );
    oceanGrad.addColorStop(0, '#FFFFFF');
    oceanGrad.addColorStop(0.2, '#FAF7F0');
    oceanGrad.addColorStop(0.45, '#E8F2FA');
    oceanGrad.addColorStop(0.75, '#D0E3F5');
    oceanGrad.addColorStop(1, '#AECFEA');

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = oceanGrad;
    ctx.fill();

    // Convert 3D spherical angles
    const radY = (angleY * Math.PI) / 180;
    const radX = (angleX * Math.PI) / 180;

    const project3D = (lat, lon) => {
      const phi = (lat * Math.PI) / 180;
      const theta = ((lon + angleY) * Math.PI) / 180;

      // 3D coordinate on unit sphere
      const x0 = Math.cos(phi) * Math.sin(theta);
      const y0 = Math.sin(phi);
      const z0 = Math.cos(phi) * Math.cos(theta);

      // Rotate around X axis
      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);
      const y1 = y0 * cosX - z0 * sinX;
      const z1 = y0 * sinX + z0 * cosX;

      return {
        x: cx + x0 * R,
        y: cy - y1 * R,
        z: z1,
        visible: z1 > -0.05
      };
    };

    // 3. Draw 3D Longitude & Latitude Curved Grid on Earth
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(200, 155, 60, 0.28)';

    // Latitude Parallels
    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath();
      let first = true;
      for (let lon = -180; lon <= 180; lon += 8) {
        const p = project3D(lat, lon);
        if (p.visible) {
          if (first) { ctx.moveTo(p.x, p.y); first = false; }
          else { ctx.lineTo(p.x, p.y); }
        } else {
          first = true;
        }
      }
      ctx.stroke();
    }

    // Longitude Meridians
    ctx.strokeStyle = 'rgba(8, 120, 201, 0.25)';
    for (let lon = 0; lon < 360; lon += 30) {
      ctx.beginPath();
      let first = true;
      for (let lat = -80; lat <= 80; lat += 6) {
        const p = project3D(lat, lon);
        if (p.visible) {
          if (first) { ctx.moveTo(p.x, p.y); first = false; }
          else { ctx.lineTo(p.x, p.y); }
        } else {
          first = true;
        }
      }
      ctx.stroke();
    }

    // 4. Draw Realistic 3D Continents Landmasses
    CONTINENTS.forEach((continent) => {
      ctx.beginPath();
      let started = false;
      continent.forEach((pt) => {
        const p = project3D(pt.lat, pt.lon);
        if (p.visible) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        }
      });
      ctx.closePath();

      // Golden-emerald continental gradient
      const landGrad = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      landGrad.addColorStop(0, 'rgba(200, 155, 60, 0.42)');
      landGrad.addColorStop(0.5, 'rgba(178, 140, 50, 0.36)');
      landGrad.addColorStop(1, 'rgba(94, 140, 98, 0.32)');

      ctx.fillStyle = landGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(200, 155, 60, 0.65)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // 5. Draw Dynamic Connection Beams from Global Hubs to India
    const indiaPos = project3D(20.5, 78.9); // India Coordinates

    GLOBAL_HUBS.forEach((hub) => {
      const hubPos = project3D(hub.lat, hub.lon);
      if (hubPos.visible || indiaPos.visible) {
        ctx.beginPath();
        ctx.moveTo(hubPos.x, hubPos.y);

        // Curved 3D Great-Circle Arc
        const midX = (hubPos.x + indiaPos.x) / 2;
        const midY = (hubPos.y + indiaPos.y) / 2 - 30;
        ctx.quadraticCurveTo(midX, midY, indiaPos.x, indiaPos.y);

        const arcGrad = ctx.createLinearGradient(hubPos.x, hubPos.y, indiaPos.x, indiaPos.y);
        arcGrad.addColorStop(0, 'rgba(8, 120, 201, 0.6)');
        arcGrad.addColorStop(0.5, 'rgba(200, 155, 60, 0.8)');
        arcGrad.addColorStop(1, 'rgba(200, 155, 60, 0.95)');

        ctx.strokeStyle = arcGrad;
        ctx.lineWidth = activeHub === hub.id ? 2.5 : 1.4;
        ctx.stroke();
      }

      // Draw Hub Beacon Dot on Surface
      if (hubPos.visible) {
        ctx.beginPath();
        ctx.arc(hubPos.x, hubPos.y, activeHub === hub.id ? 7 : 5, 0, Math.PI * 2);
        ctx.fillStyle = '#0878C9';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });

    // 6. Draw Glowing India Hub Beacon on Earth
    if (indiaPos.visible) {
      ctx.beginPath();
      ctx.arc(indiaPos.x, indiaPos.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#C89B3C';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Outer Pulsing Halo
      ctx.beginPath();
      ctx.arc(indiaPos.x, indiaPos.y, 14, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200, 155, 60, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 7. Specular Light Flare Reflection
    const specularGrad = ctx.createRadialGradient(
      cx - R * 0.45, cy - R * 0.45, 0,
      cx - R * 0.45, cy - R * 0.45, R * 0.75
    );
    specularGrad.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
    specularGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.25)');
    specularGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = specularGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // 8. 3D Spherical Shadow Rim (Depth)
    const shadowGrad = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R);
    shadowGrad.addColorStop(0, 'rgba(11, 37, 69, 0)');
    shadowGrad.addColorStop(0.85, 'rgba(11, 37, 69, 0.12)');
    shadowGrad.addColorStop(1, 'rgba(11, 37, 69, 0.35)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Outer Earth Gold Border
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(200, 155, 60, 0.55)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [activeHub]);

  // ── Main Animation & Cursor-Following Loop ──
  useEffect(() => {
    let animId;

    const loop = () => {
      // Smooth lerping towards target angles
      currentRotY.current += (targetRotY.current - currentRotY.current) * 0.08;
      currentRotX.current += (targetRotX.current - currentRotX.current) * 0.08;

      // Auto-spin if user is not hovering or dragging
      if (autoSpinRef.current && !isDragging) {
        targetRotY.current += 0.25;
      }

      setRotY(currentRotY.current);
      setRotX(currentRotX.current);

      drawEarth(currentRotY.current, currentRotX.current);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [drawEarth, isDragging]);

  // ── Mouse Movement Tracking: Automatically turns the 3D Globe to the cursor! ──
  const handleMouseMove = (e) => {
    if (!containerRef.current || isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Direct cursor following rotation
    targetRotY.current = currentRotY.current + nx * 3.5;
    targetRotX.current = Math.max(-28, Math.min(28, ny * -45));
  };

  // ── Drag & Spin Gestures ──
  const handlePointerDown = (e) => {
    // If the click is on an interactive card, button, or control, do not capture or start drag
    if (e.target.closest('.earth-hub-card-wrap') || e.target.closest('button') || e.target.closest('.nri-subglobe-bar-wrapper')) {
      return;
    }

    setIsDragging(true);
    autoSpinRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startRotX: currentRotX.current,
      startRotY: currentRotY.current
    };

    if (e.currentTarget.setPointerCapture) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) {}
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    targetRotY.current = dragStartRef.current.startRotY + dx * 0.6;
    targetRotX.current = Math.max(-32, Math.min(32, dragStartRef.current.startRotX - dy * 0.4));
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (e.currentTarget.releasePointerCapture) {
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    resumeTimerRef.current = setTimeout(() => {
      autoSpinRef.current = true;
    }, 3000);
  };

  // Manage body scroll locking and Escape key for modal
  useEffect(() => {
    if (modalHub) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalHub(null);
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [modalHub]);

  // Focus a specific country and optionally open modal
  const handleFocusCountry = (hub, openModal = false) => {
    setActiveHub(hub.id);
    autoSpinRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    // Rotate earth so country longitude faces forward
    const targetLongitudeAngle = 90 - hub.lon;
    targetRotY.current = targetLongitudeAngle;
    targetRotX.current = hub.lat * 0.4;

    if (openModal) {
      setModalHub(hub);
    }

    resumeTimerRef.current = setTimeout(() => {
      autoSpinRef.current = true;
    }, 5000);
  };

  const handleReset = () => {
    setActiveHub(null);
    setHoveredHub(null);
    targetRotY.current = 45;
    targetRotX.current = 15;
    autoSpinRef.current = true;
  };

  return (
    <div
      className={`nri-earth-viewport ${isDragging ? 'is-dragging' : ''}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Realistic 3D Earth Globe with NRI Investment Hubs"
    >
      {/* ── 3D Earth & Orbit Container ── */}
      <div className="earth-stage-wrap">
        {/* Actual 3D Canvas Earth Sphere */}
        <div className="earth-canvas-container">
          <canvas
            ref={canvasRef}
            width={340}
            height={340}
            className="earth-3d-canvas"
          />

          {/* Central India High-Contrast Overlay Card */}
          <div className="earth-center-badge">
            <div className="earth-badge-top">
              <span className="flag-icon">🇮🇳</span>
              <span className="badge-status">DIRECT INWARD REMITTANCE</span>
            </div>
            <div className="earth-badge-title">INDIA GROWTH HUB</div>
            <div className="earth-badge-aum">₹100Cr+ AUM Managed</div>
          </div>
        </div>

        {/* ── Widely Spaced 3D Orbiting Country Hub Cards ── */}
        {GLOBAL_HUBS.map((hub) => {
          // Dynamic calculation of 3D card position around the earth
          const rad = ((hub.orbitAngle + rotY) * Math.PI) / 180;
          const radiusX = 350;
          const radiusY = 170;
          const x = Math.cos(rad) * radiusX;
          const y = Math.sin(rad) * radiusY * 0.45 + (hub.lat > 20 ? -65 : 65);
          const z = Math.sin(rad) * 120;
          const isFront = z > -30;
          const isSelected = activeHub === hub.id;
          const isHover = hoveredHub === hub.id;

          return (
            <div
              key={hub.id}
              className={`earth-hub-card-wrap ${isFront ? 'card-front' : 'card-back'} ${
                isSelected || isHover ? 'card-active' : ''
              }`}
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                zIndex: isFront ? 40 : 10,
              }}
              onMouseEnter={() => setHoveredHub(hub.id)}
              onMouseLeave={() => setHoveredHub(null)}
              onClick={(e) => {
                e.stopPropagation();
                handleFocusCountry(hub, true); // Opens full "Read More" modal on card click!
              }}
            >
              <div className="earth-hub-card">
                {/* Top Section: Left Nickname + Center Country/Continent + Right Yellow Hub Box */}
                <div className="hub-card-header">
                  {/* Left: Single Clean Nickname Badge */}
                  <div className="hub-nickname-badge">
                    <span className="hub-code">{hub.nickname}</span>
                  </div>

                  {/* Center: Country Name (single line) & Continent underneath */}
                  <div className="hub-geo-info">
                    <span className="hub-country-name">{hub.countryName}</span>
                    <span className="hub-continent-name">{hub.continent}</span>
                  </div>

                  {/* Right: Yellow Aesthetic Hub Name Box (Single Line) */}
                  <div className="hub-yellow-box">
                    <span>{hub.tag}</span>
                  </div>
                </div>

                {/* Middle: Hint Line */}
                <div className="hub-hint-wrap">
                  <p className="hub-benefit-text">{hub.benefit}</p>
                </div>

                {/* Bottom: Click to Focus & View Portfolio Button */}
                <div className="hub-card-action">
                  <button
                    type="button"
                    className="hub-focus-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFocusCountry(hub, true); // Opens full "Read More" modal!
                    }}
                  >
                    <span>Click to Focus &amp; View Portfolio</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Sub-Globe Quick Exploration Bar (Spaced cleanly below without overlap) ── */}
      <div className="nri-subglobe-bar-wrapper">
        <div className="nri-subglobe-bar">
          <span className="bar-title">Explore NRI Portfolios:</span>
          {GLOBAL_HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              className={`bar-hub-btn ${activeHub === hub.id ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleFocusCountry(hub, true); // Rotate & open detailed portfolio modal
              }}
            >
              <span className="bar-code">{hub.nickname}</span>
              <span className="bar-city">{hub.city}</span>
            </button>
          ))}
          <button
            type="button"
            className="bar-reset-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleReset();
            }}
          >
            ↺ Reset View
          </button>
        </div>

        <div className="nri-subglobe-hint">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
          </svg>
          <span>Move cursor across the screen to turn Earth, or click &amp; drag to spin freely in 360° space</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
         FULL NRI PORTFOLIO & REGULATION MODAL
         (Matching Blogs "Read More" Pop-Up Experience via createPortal)
         ═══════════════════════════════════════════ */}
      {modalHub && typeof document !== 'undefined' && createPortal(
        <div
          className="nri-hub-modal-overlay"
          onClick={() => setModalHub(null)}
          role="presentation"
        >
          <div
            className="nri-hub-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              className="nri-hub-modal-close"
              onClick={() => setModalHub(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Modal Header */}
            <div className="nri-hub-modal-header">
              <div className="modal-top-row">
                <span className="modal-code-badge">{modalHub.nickname}</span>
                <span className="modal-badge">{modalHub.modalData.badge}</span>
              </div>
              <h2 className="modal-title">{modalHub.modalData.title}</h2>
              <div className="modal-meta-bar">
                <span>{modalHub.modalData.meta}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="nri-hub-modal-body">
              {/* Highlight Stats Row */}
              <div className="modal-stats-grid">
                {modalHub.modalData.highlights.map((h, i) => (
                  <div key={i} className="modal-stat-box">
                    <span className="stat-label">{h.label}</span>
                    <strong className="stat-value">{h.value}</strong>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div className="modal-section">
                <h4 className="modal-sec-heading">Strategic Overview</h4>
                <p className="modal-lead-p">{modalHub.modalData.overview}</p>
              </div>

              {/* Recommended Asset Allocation */}
              <div className="modal-section">
                <h4 className="modal-sec-heading">Customized Asset Allocation</h4>
                <div className="modal-allocations-table">
                  {modalHub.modalData.allocations.map((alloc, idx) => (
                    <div key={idx} className="alloc-row">
                      <div className="alloc-asset-col">
                        <span className="alloc-badge">{alloc.pct}</span>
                        <strong className="alloc-name">{alloc.asset}</strong>
                      </div>
                      <p className="alloc-desc">{alloc.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance & Tax Regulations */}
              <div className="modal-section">
                <h4 className="modal-sec-heading">FEMA, Banking &amp; DTAA Compliance</h4>
                <ul className="modal-compliance-list">
                  {modalHub.modalData.compliance.map((item, idx) => (
                    <li key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0878C9" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Callout */}
              <div className="modal-cta-box">
                <div className="modal-cta-text">
                  <h3>Ready to Deploy Your {modalHub.city} NRI Portfolio?</h3>
                  <p>Speak directly with KDJ Wealth's senior AMFI-registered NRI wealth advisors.</p>
                </div>
                <a
                  href={`https://wa.me/919821891816?text=Hello%20KDJ%20Wealth,%20I%20am%20interested%20in%20the%20${encodeURIComponent(modalHub.city)}%20NRI%20Investment%20Portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-whatsapp-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>Connect with NRI Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
