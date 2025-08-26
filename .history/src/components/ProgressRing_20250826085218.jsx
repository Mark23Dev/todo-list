const ProgressRing = () => {
  return (
    <svg className="progress-ring min-w-0 min-h-0">
      <circle
        className="progress-ring__circle"
        stroke="blue"
        strokeWidth="2"
        fill="transparent"
        r="5"
        cx="20"
        cy="20"
      />
    </svg>
  );
}

export default ProgressRing;