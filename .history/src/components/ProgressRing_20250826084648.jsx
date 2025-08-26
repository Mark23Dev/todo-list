const ProgressRing = () => {
  return <div>
    <svg className="progress-ring" height="120" width="120">
      <circle
        className="progress-ring__circle"
        stroke="blue"
        strokeWidth="4"
        fill="transparent"
        r="52"
        cx="60"
        cy="60"
      />
    </svg>
  </div>;
}

export default ProgressRing;