const ProgressRing = ({fill, radius, cx, cy, strokeWidth, stroke, height, width, label}) => {
  return (
    <svg className="progress-ring min-w-0 min-h-0 m-0 p-0" style={{ height: `${height}px`, width: `${width}px` }}>
      <circle
        className="progress-ring__circle min-w-0 min-h-0"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        r={radius}
        cx={cx}
        cy={cy}
      />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" className="font-bold fill-current">{label}</text>
    </svg>
  );
}

export default ProgressRing;