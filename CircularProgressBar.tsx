import React, { useEffect, useState } from 'react';

type CircularProgressBarProps = {
  percentage: number;
  strokeWidth?: number;
  defaultFillColor?: string;
  percentageFillColor?: string;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  strokeWidth = 10,
  defaultFillColor = 'lightgray',
  percentageFillColor = 'blue',
}) => {
  const circumference = 2 * Math.PI * 40; // Assuming radius is 40

  const [dashOffset, setDashOffset] = useState<number>(circumference);

  useEffect(() => {
    const offset = circumference - (circumference * percentage) / 100;
    setDashOffset(offset);
  }, [percentage, circumference]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        strokeWidth={strokeWidth}
        stroke={defaultFillColor}
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        strokeWidth={strokeWidth}
        stroke={percentageFillColor}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)" // Rotate the circle to start from mid-top
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20">
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
