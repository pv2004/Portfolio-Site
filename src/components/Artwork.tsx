import type { ReactNode } from "react";

function Frame({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="Abstract editorial artwork"
    >
      <rect width="800" height="600" fill={bg} />
      {children}
    </svg>
  );
}

const art: Record<string, () => ReactNode> = {
  prism: () => (
    <Frame bg="#0b0b10">
      <defs>
        <linearGradient id="prismBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f04a3a" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#f0c95a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#7ac943" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#42b8d9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7655e8" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g transform="rotate(-24 400 300)">
        <rect x="200" y="270" width="420" height="18" rx="9" fill="url(#prismBand)" opacity="0.85" />
        <rect x="300" y="322" width="240" height="9" rx="4.5" fill="url(#prismBand)" opacity="0.4" />
        <rect x="360" y="360" width="130" height="5" rx="2.5" fill="url(#prismBand)" opacity="0.25" />
      </g>
      <g fill="#f0eee8">
        <circle cx="140" cy="140" r="3" opacity="0.5" />
        <circle cx="680" cy="120" r="2.5" opacity="0.4" />
        <circle cx="700" cy="480" r="3" opacity="0.5" />
        <circle cx="110" cy="450" r="2" opacity="0.35" />
      </g>
      <text x="60" y="120" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="90" fill="#f0eee8" opacity="0.7">
        prism
      </text>
    </Frame>
  ),

  waveform: () => (
    <Frame bg="#f0efe8">
      <g transform="translate(0,300)">
        <path
          d="M 0 0 C 60 -140, 120 140, 180 0 C 240 -120, 300 120, 360 0 C 420 -150, 480 150, 540 0 C 600 -110, 660 110, 720 0 L 800 -30"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="3"
        />
        {[60, 180, 300, 420, 540, 660].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={0}
            r={i % 2 ? 5 : 3}
            fill={i % 2 ? "#d62e69" : "#0a0a0a"}
          />
        ))}
      </g>
      <text x="60" y="120" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="90" fill="#0a0a0a" opacity="0.8">
        listen.
      </text>
    </Frame>
  ),

  constellation: () => (
    <Frame bg="#0a0a0f">
      <g stroke="#f0eee8" strokeWidth="1" opacity="0.55">
        <line x1="160" y1="120" x2="300" y2="220" />
        <line x1="300" y1="220" x2="420" y2="180" />
        <line x1="420" y1="180" x2="560" y2="300" />
        <line x1="560" y1="300" x2="680" y2="260" />
        <line x1="300" y1="220" x2="340" y2="380" />
        <line x1="340" y1="380" x2="520" y2="440" />
        <line x1="160" y1="120" x2="120" y2="260" />
      </g>
      <g>
        <circle cx="160" cy="120" r="4" fill="#f0eee8" />
        <circle cx="300" cy="220" r="6" fill="#d62e69" />
        <circle cx="420" cy="180" r="3.5" fill="#f0eee8" />
        <circle cx="560" cy="300" r="5" fill="#f0eee8" />
        <circle cx="680" cy="260" r="3" fill="#f0eee8" />
        <circle cx="340" cy="380" r="4.5" fill="#f0eee8" />
        <circle cx="520" cy="440" r="6" fill="#9c5de5" />
        <circle cx="120" cy="260" r="3" fill="#f0eee8" />
      </g>
      <g fill="#f0eee8" opacity="0.3">
        <circle cx="600" cy="120" r="1.5" />
        <circle cx="700" cy="420" r="1.5" />
        <circle cx="90" cy="440" r="1.5" />
        <circle cx="480" cy="80" r="1.5" />
      </g>
    </Frame>
  ),

  fabric: () => (
    <Frame bg="#2a241f">
      <g stroke="#f0efe8" opacity="0.28">
        <line x1="0" y1="40" x2="800" y2="0" strokeWidth="8" />
        <line x1="0" y1="130" x2="800" y2="90" strokeWidth="8" />
        <line x1="0" y1="220" x2="800" y2="180" strokeWidth="8" />
        <line x1="0" y1="310" x2="800" y2="270" strokeWidth="8" />
        <line x1="0" y1="400" x2="800" y2="360" strokeWidth="8" />
        <line x1="0" y1="490" x2="800" y2="450" strokeWidth="8" />
        <line x1="0" y1="580" x2="800" y2="540" strokeWidth="8" />
      </g>
      <g stroke="#d62e69" opacity="0.5">
        <line x1="0" y1="250" x2="800" y2="210" strokeWidth="3" />
        <line x1="0" y1="460" x2="800" y2="420" strokeWidth="3" />
      </g>
      <g stroke="#f0efe8" opacity="0.22">
        <line x1="90" y1="0" x2="150" y2="600" strokeWidth="6" />
        <line x1="300" y1="0" x2="360" y2="600" strokeWidth="6" />
        <line x1="510" y1="0" x2="570" y2="600" strokeWidth="6" />
        <line x1="700" y1="0" x2="760" y2="600" strokeWidth="6" />
      </g>
    </Frame>
  ),

  silicon: () => (
    <Frame bg="#0c0f1a">
      <defs>
        <radialGradient id="aiGlow" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#42b8d9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#42b8d9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#aiGlow)" />
      <g stroke="#42b8d9" strokeWidth="1" opacity="0.25">
        {[80,160,240,320,400,480,560,640,720].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" />
        ))}
        {[60,120,180,240,300,360,420,480,540].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} />
        ))}
      </g>
      <g stroke="#42b8d9" strokeWidth="1.5" opacity="0.6">
        <line x1="240" y1="200" x2="400" y2="200" />
        <line x1="400" y1="200" x2="400" y2="340" />
        <line x1="400" y1="340" x2="560" y2="340" />
        <line x1="160" y1="300" x2="300" y2="300" />
        <line x1="300" y1="300" x2="300" y2="440" />
        <line x1="500" y1="180" x2="600" y2="180" />
        <line x1="600" y1="180" x2="600" y2="300" />
      </g>
      <g fill="#42b8d9">
        <rect x="380" y="180" width="40" height="40" rx="4" opacity="0.8" />
        <rect x="280" y="280" width="40" height="40" rx="4" opacity="0.7" />
        <rect x="540" y="320" width="40" height="40" rx="4" opacity="0.7" />
        <rect x="220" y="180" width="16" height="16" rx="2" opacity="0.5" />
        <rect x="540" y="160" width="16" height="16" rx="2" opacity="0.5" />
        <rect x="140" y="280" width="16" height="16" rx="2" opacity="0.4" />
      </g>
      <circle cx="400" cy="260" r="60" fill="none" stroke="#f0c95a" strokeWidth="2" opacity="0.7" />
      <circle cx="400" cy="260" r="40" fill="none" stroke="#f0c95a" strokeWidth="1.2" opacity="0.5" />
      <text x="388" y="268" fontFamily="'JetBrains Mono', monospace" fontSize="22" fill="#f0c95a" opacity="0.9">AI</text>
    </Frame>
  ),

  racetrack: () => (
    <Frame bg="#1a1018">
      <defs>
        <linearGradient id="trackGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d62e69" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#f0c95a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d62e69" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M 120 480 C 120 200, 300 100, 400 100 C 500 100, 680 200, 680 350 C 680 450, 580 520, 480 520 C 380 520, 320 440, 320 360 C 320 300, 380 260, 440 260"
        fill="none"
        stroke="url(#trackGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M 120 480 C 120 200, 300 100, 400 100 C 500 100, 680 200, 680 350 C 680 450, 580 520, 480 520 C 380 520, 320 440, 320 360 C 320 300, 380 260, 440 260"
        fill="none"
        stroke="#f0eee8"
        strokeWidth="1"
        strokeDasharray="8 12"
        opacity="0.3"
      />
      <circle cx="440" cy="260" r="8" fill="#f0c95a" />
      <circle cx="440" cy="260" r="16" fill="none" stroke="#f0c95a" strokeWidth="1" opacity="0.5" />
      <circle cx="680" cy="350" r="6" fill="#d62e69" />
      <circle cx="120" cy="480" r="6" fill="#42b8d9" />
      <g opacity="0.6">
        <rect x="540" y="80" width="180" height="90" rx="6" fill="#0a0a0a" stroke="#f0eee8" strokeWidth="0.8" />
        <text x="556" y="110" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#f0c95a">LAP 47/50</text>
        <text x="556" y="132" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0eee8" opacity="0.7">PIA  87.15s</text>
        <text x="556" y="148" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0eee8" opacity="0.7">NOR  87.20s</text>
        <text x="556" y="164" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0eee8" opacity="0.55">VER  87.40s</text>
      </g>
      <g fill="#f0eee8" opacity="0.3">
        <circle cx="100" cy="100" r="1.5" />
        <circle cx="700" cy="500" r="1.5" />
        <circle cx="500" cy="80" r="1.5" />
      </g>
    </Frame>
  ),

  aero: () => (
    <Frame bg="#0d1117">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2744" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyGrad)" />
      <g transform="translate(400,280) rotate(-15)">
        <polygon points="-80,0 -30,-12 30,-12 80,0 30,12 -30,12" fill="none" stroke="#f0eee8" strokeWidth="2" opacity="0.8" />
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#f0eee8" strokeWidth="0.8" opacity="0.4" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke="#f0eee8" strokeWidth="0.8" opacity="0.4" />
        <polygon points="-60,0 -25,-40 25,-40 60,0" fill="none" stroke="#42b8d9" strokeWidth="1.5" opacity="0.7" />
        <polygon points="-30,0 -10,25 10,25 30,0" fill="none" stroke="#42b8d9" strokeWidth="1.2" opacity="0.5" />
      </g>
      <g stroke="#42b8d9" strokeWidth="1" opacity="0.3" strokeDasharray="4 6">
        <circle cx="400" cy="280" r="100" fill="none" />
        <circle cx="400" cy="280" r="160" fill="none" />
        <circle cx="400" cy="280" r="220" fill="none" />
      </g>
      <g stroke="#f0c95a" strokeWidth="1.5" opacity="0.6">
        <line x1="400" y1="180" x2="400" y2="200" />
        <line x1="400" y1="360" x2="400" y2="380" />
        <line x1="300" y1="280" x2="320" y2="280" />
        <line x1="480" y1="280" x2="500" y2="280" />
      </g>
      <g fill="#f0c95a" opacity="0.7">
        <circle cx="400" cy="280" r="4" />
        <text x="410" y="275" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0c95a">yaw: 23.4°</text>
        <text x="410" y="295" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0c95a">pitch: -5.2°</text>
        <text x="410" y="315" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f0c95a">roll: 12.8°</text>
      </g>
      <g fill="#f0eee8" opacity="0.25">
        <circle cx="120" cy="80" r="1" />
        <circle cx="650" cy="120" r="1.5" />
        <circle cx="200" cy="500" r="1" />
        <circle cx="700" cy="450" r="1.5" />
        <circle cx="80" cy="350" r="1" />
      </g>
    </Frame>
  ),

  gate: () => (
    <Frame bg="#1c1f1a">
      <defs>
        <radialGradient id="sensorGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#7c9d42" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7c9d42" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sensorGlow)" />
      <g>
        <rect x="140" y="320" width="520" height="8" rx="4" fill="#4a4a42" opacity="0.6" />
        <rect x="140" y="320" width="200" height="8" rx="4" fill="#7c9d42" opacity="0.8" />
      </g>
      <g>
        <rect x="140" y="380" width="520" height="8" rx="4" fill="#4a4a42" opacity="0.6" />
        <rect x="140" y="380" width="520" height="8" rx="4" fill="#7c9d42" opacity="0.8" />
      </g>
      <g>
        <rect x="140" y="440" width="520" height="8" rx="4" fill="#4a4a42" opacity="0.6" />
        <rect x="140" y="440" width="350" height="8" rx="4" fill="#7c9d42" opacity="0.8" />
      </g>
      <g fill="#f0c95a" opacity="0.8">
        <rect x="180" y="300" width="14" height="40" rx="2" />
        <rect x="340" y="300" width="14" height="40" rx="2" />
        <rect x="500" y="300" width="14" height="40" rx="2" />
      </g>
      <g fill="#42b8d9" opacity="0.6">
        <rect x="180" y="360" width="14" height="40" rx="2" />
        <rect x="340" y="360" width="14" height="40" rx="2" />
      </g>
      <g fill="#d62e69" opacity="0.5">
        <rect x="500" y="420" width="14" height="40" rx="2" />
      </g>
      <g>
        <rect x="680" y="240" width="8" height="260" rx="4" fill="#3a3a32" />
        <rect x="680" y="240" width="8" height="80" rx="4" fill="#f0c95a" opacity="0.8" />
        <rect x="660" y="360" width="48" height="32" rx="4" fill="#0a0a0a" stroke="#7c9d42" strokeWidth="1" />
        <text x="668" y="382" fontFamily="'JetBrains Mono', monospace" fontSize="12" fill="#7c9d42">04</text>
      </g>
      <g opacity="0.5">
        <circle cx="187" cy="290" r="3" fill="#f0c95a" />
        <circle cx="347" cy="290" r="3" fill="#f0c95a" />
        <circle cx="507" cy="290" r="3" fill="#42b8d9" />
      </g>
    </Frame>
  ),

  dataflow: () => (
    <Frame bg="#0e1117">
      <defs>
        <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#42b8d9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#42b8d9" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g>
        <ellipse cx="400" cy="160" rx="120" ry="30" fill="none" stroke="#42b8d9" strokeWidth="2" opacity="0.7" />
        <rect x="280" y="160" width="240" height="200" fill="url(#dbGrad)" opacity="0.15" />
        <line x1="280" y1="160" x2="280" y2="360" stroke="#42b8d9" strokeWidth="2" opacity="0.7" />
        <line x1="520" y1="160" x2="520" y2="360" stroke="#42b8d9" strokeWidth="2" opacity="0.7" />
        <ellipse cx="400" cy="360" rx="120" ry="30" fill="none" stroke="#42b8d9" strokeWidth="2" opacity="0.7" />
        <ellipse cx="400" cy="240" rx="120" ry="30" fill="none" stroke="#42b8d9" strokeWidth="1" opacity="0.3" strokeDasharray="6 4" />
        <ellipse cx="400" cy="300" rx="120" ry="30" fill="none" stroke="#42b8d9" strokeWidth="1" opacity="0.3" strokeDasharray="6 4" />
      </g>
      <g fill="#f0c95a" opacity="0.7">
        <rect x="150" y="190" width="100" height="8" rx="4" />
        <rect x="150" y="210" width="80" height="8" rx="4" opacity="0.5" />
        <rect x="150" y="230" width="90" height="8" rx="4" opacity="0.5" />
        <rect x="550" y="190" width="100" height="8" rx="4" />
        <rect x="550" y="210" width="70" height="8" rx="4" opacity="0.5" />
        <rect x="550" y="230" width="85" height="8" rx="4" opacity="0.5" />
      </g>
      <g stroke="#f0c95a" strokeWidth="1" opacity="0.4" strokeDasharray="4 4">
        <line x1="250" y1="210" x2="280" y2="240" />
        <line x1="250" y1="220" x2="280" y2="270" />
        <line x1="550" y1="210" x2="520" y2="240" />
        <line x1="550" y1="220" x2="520" y2="270" />
      </g>
      <g>
        <text x="365" y="260" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#f0eee8" opacity="0.8">PK</text>
        <text x="375" y="280" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#42b8d9" opacity="0.6">INT</text>
      </g>
      <g fill="#f0eee8" opacity="0.15">
        <circle cx="100" cy="100" r="2" />
        <circle cx="700" cy="500" r="2" />
        <circle cx="650" cy="80" r="1.5" />
      </g>
    </Frame>
  ),

  analytics: () => (
    <Frame bg="#0a0e1a">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d62e69" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d62e69" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g stroke="#2a2a3a" strokeWidth="1" opacity="0.3">
        <line x1="120" y1="450" x2="700" y2="450" />
        <line x1="120" y1="350" x2="700" y2="350" />
        <line x1="120" y1="250" x2="700" y2="250" />
        <line x1="120" y1="150" x2="700" y2="150" />
      </g>
      <g fill="url(#barGrad)">
        <rect x="160" y="300" width="40" height="150" rx="3" />
        <rect x="220" y="220" width="40" height="230" rx="3" />
        <rect x="280" y="180" width="40" height="270" rx="3" />
        <rect x="340" y="260" width="40" height="190" rx="3" />
        <rect x="400" y="140" width="40" height="310" rx="3" />
        <rect x="460" y="200" width="40" height="250" rx="3" />
        <rect x="520" y="160" width="40" height="290" rx="3" />
        <rect x="580" y="280" width="40" height="170" rx="3" />
      </g>
      <g fill="#42b8d9" opacity="0.7">
        <circle cx="180" cy="290" r="4" />
        <circle cx="240" cy="210" r="4" />
        <circle cx="300" cy="170" r="4" />
        <circle cx="360" cy="250" r="4" />
        <circle cx="420" cy="130" r="4" />
        <circle cx="480" cy="190" r="4" />
        <circle cx="540" cy="150" r="4" />
        <circle cx="600" cy="270" r="4" />
      </g>
      <polyline
        points="180,290 240,210 300,170 360,250 420,130 480,190 540,150 600,270"
        fill="none"
        stroke="#42b8d9"
        strokeWidth="2"
        opacity="0.6"
      />
      <g opacity="0.6">
        <rect x="580" y="80" width="160" height="80" rx="6" fill="#0a0a0a" stroke="#d62e69" strokeWidth="0.8" />
        <text x="596" y="105" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#d62e69">$4.38B</text>
        <text x="596" y="122" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#f0eee8" opacity="0.6">LOANS</text>
        <text x="596" y="140" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#42b8d9">$3.77B</text>
        <text x="596" y="155" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#f0eee8" opacity="0.5">DEPOSITS</text>
      </g>
    </Frame>
  ),

  sky: () => (
    <Frame bg="#e8e4dc">
      <defs>
        <linearGradient id="skyGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fbce6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e8e4dc" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="350" fill="url(#skyGrad2)" />
      <g fill="#f0efe8">
        <ellipse cx="260" cy="180" rx="80" ry="40" />
        <ellipse cx="220" cy="170" rx="60" ry="35" />
        <ellipse cx="300" cy="175" rx="55" ry="30" />
        <ellipse cx="560" cy="140" rx="90" ry="45" />
        <ellipse cx="520" cy="130" rx="65" ry="35" />
        <ellipse cx="600" cy="135" rx="60" ry="32" />
      </g>
      <g stroke="#42b8d9" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <line x1="380" y1="280" x2="375" y2="310" />
        <line x1="400" y1="280" x2="395" y2="320" />
        <line x1="420" y1="280" x2="415" y2="305" />
        <line x1="440" y1="280" x2="435" y2="315" />
        <line x1="460" y1="280" x2="455" y2="300" />
      </g>
      <g fill="#f0c95a" opacity="0.8">
        <circle cx="150" cy="120" r="30" />
        <circle cx="150" cy="120" r="22" fill="#e8e4dc" />
      </g>
      <g opacity="0.5">
        <text x="540" y="310" fontFamily="'JetBrains Mono', monospace" fontSize="48" fill="#42b8d9" fontWeight="bold">24°</text>
        <text x="640" y="310" fontFamily="'JetBrains Mono', monospace" fontSize="16" fill="#0a0a0a" opacity="0.5">C</text>
      </g>
      <g>
        <path d="M 100 420 Q 200 390, 300 410 T 500 400 T 700 415" fill="none" stroke="#42b8d9" strokeWidth="1.5" opacity="0.3" />
        <path d="M 100 450 Q 250 430, 400 445 T 700 440" fill="none" stroke="#42b8d9" strokeWidth="1" opacity="0.2" />
      </g>
      <g fill="#0a0a0a" opacity="0.15">
        <rect x="300" y="460" width="80" height="40" rx="3" />
        <rect x="400" y="450" width="60" height="50" rx="3" />
        <rect x="480" y="465" width="70" height="35" rx="3" />
      </g>
    </Frame>
  ),

};

export function Artwork({ variant }: { variant: string }) {
  return (
    <div className="h-full w-full overflow-hidden">
      {art[variant]?.()}
    </div>
  );
}

