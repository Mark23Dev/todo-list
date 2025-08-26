const ProgressRing = () => {
  return (
    <svg className="progress-ring min-w-0 min-h-0 m-0 p-0 ">
      <circle
        className="progress-ring__circle min-w-0 min-h-0"
        stroke="blue"
        strokeWidth="1.5"
        fill="transparent"
        r="4"
        cx="6"
        cy="6"
      />
    </svg>
  );
}

export default ProgressRing;