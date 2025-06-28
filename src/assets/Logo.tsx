import React from 'react';

interface LogoProps {
    size?: number;
    animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 100, animated = true }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Gradient for the circle */}
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4facfe" />
                        <stop offset="100%" stopColor="#00f2fe" />
                    </linearGradient>

                    {/* Gradient for the checkmark */}
                    <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#d4f1f9" />
                    </linearGradient>

                    {/* Glow effect */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow" />
                        <feBlend in="SourceGraphic" in2="glow" mode="screen" />
                    </filter>

                    {/* Animation definitions */}
                    {animated && (
                        <>
                            {/* Pulsing animation */}
                            <animateTransform
                                xlinkHref="#pulseElement"
                                attributeName="transform"
                                attributeType="XML"
                                type="scale"
                                values="1;1.05;1"
                                dur="3s"
                                repeatCount="indefinite"
                            />

                            {/* Rotation animation */}
                            <animateTransform
                                xlinkHref="#rotationElement"
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0 100 100"
                                to="360 100 100"
                                dur="20s"
                                repeatCount="indefinite"
                            />

                            {/* Gradient rotation */}
                            <animateTransform
                                xlinkHref="#circleGradient"
                                attributeName="gradientTransform"
                                type="rotate"
                                from="0 0.5 0.5"
                                to="360 0.5 0.5"
                                dur="15s"
                                repeatCount="indefinite"
                            />

                            {/* Glow animation */}
                            <animate
                                xlinkHref="#glowElement"
                                attributeName="stdDeviation"
                                values="4;6;4"
                                dur="3s"
                                repeatCount="indefinite"
                            />

                            {/* Checkmark animation */}
                            <animate
                                xlinkHref="#checkmark"
                                attributeName="stroke-dashoffset"
                                from="100"
                                to="0"
                                dur="1.5s"
                                begin="0.5s"
                                fill="freeze"
                                repeatCount="1"
                            />
                        </>
                    )}
                </defs>

                {/* Outer circle with animation */}
                <g id="pulseElement">
                    <circle
                        id="rotationElement"
                        cx="100"
                        cy="100"
                        r="90"
                        fill="url(#circleGradient)"
                        stroke="#0a192f"
                        strokeWidth="3"
                    />
                </g>

                {/* Inner circle */}
                <circle cx="100" cy="100" r="75" fill="#0a192f" fillOpacity="0.7" />

                {/* Clock markers */}
                <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="100"
                            y1="40"
                            x2="100"
                            y2="50"
                            transform={`rotate(${i * 30}, 100, 100)`}
                        />
                    ))}
                </g>

                {/* Animated checkmark */}
                <path
                    id="checkmark"
                    d="M70,110 L90,130 L130,90"
                    fill="none"
                    stroke="url(#checkGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    strokeDasharray="100"
                    strokeDashoffset={animated ? "100" : "0"}
                >
                    {animated && (
                        <animate
                            attributeName="filter"
                            attributeType="XML"
                            to="url(#glow)"
                            from="none"
                            dur="1s"
                            begin="0.5s"
                            fill="freeze"
                            repeatCount="1"
                        />
                    )}
                </path>

                {/* Glow animation element */}
                {animated && (
                    <feGaussianBlur id="glowElement" in="SourceGraphic" stdDeviation="4" result="blur" />
                )}

                {/* Center dot with glow */}
                <circle
                    cx="100"
                    cy="100"
                    r="6"
                    fill="#ffffff"
                    filter={animated ? "url(#glow)" : undefined}
                >
                    {animated && (
                        <animate
                            attributeName="r"
                            values="6;8;6"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    )}
                </circle>
            </svg>
        </div>
    );
};

export default Logo;