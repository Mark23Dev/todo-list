const ProgressRing = ({fill, radius, cx, cy, strokeWidth, stroke }) => {
  return (
    <svg className="progress-ring min-w-0 min-h-0 m-0 p-0 w-[4] h-[4]">
      <circle
        className="progress-ring__circle min-w-0 min-h-0"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        r={radius}
        cx={cx}
        cy={cy}
      />
    </svg>
  );
}

export default ProgressRing;