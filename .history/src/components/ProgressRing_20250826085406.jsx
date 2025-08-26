const ProgressRing = () => {
  return (
    <svg className="progress-ring min-w-0 min-h-0">
      <circle
        className="progress-ring__circle min-w-0 min-h-0"
        stroke="blue"
        strokeWidth="2"
        fill="transparent"
        r="5"
        cx="0"
        cy="0"
      />
    </svg>
  );
}

export default ProgressRing;