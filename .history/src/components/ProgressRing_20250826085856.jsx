const ProgressRing = () => {
  return (
    <svg className="progress-ring min-w-0 min-h-0 m-0 p-0 w-10 h-10">
      <circle
        className="progress-ring__circle min-w-0 min-h-0"
        stroke="blue"
        strokeWidth="2"
        fill="transparent"
        r="5"
        cx="7"
        cy="7"
      />
    </svg>
  );
}

export default ProgressRing;