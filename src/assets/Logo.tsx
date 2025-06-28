import React from 'react';

interface LogoProps {
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 100 }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4facfe" />
                    <stop offset="100%" stopColor="#00f2fe" />
                </linearGradient>
                <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#d4f1f9" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow" />
                    <feBlend in="SourceGraphic" in2="glow" mode="screen" />
                </filter>
            </defs>

            <circle cx="100" cy="100" r="90" fill="url(#circleGradient)" stroke="#0a192f" strokeWidth="3" />
            <circle cx="100" cy="100" r="75" fill="#0a192f" fillOpacity="0.7" />

            {/* Clock markers */}
            {[...Array(12)].map((_, i) => (
                <line
                    key={i}
                    x1="100"
                    y1="40"
                    x2="100"
                    y2="50"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${i * 30}, 100, 100)`}
                />
            ))}

            <path
                d="M70,110 L90,130 L130,90"
                fill="none"
                stroke="url(#checkGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
            />

            <circle cx="100" cy="100" r="6" fill="#ffffff" />
        </svg>
    );
};

export default Logo;   