const ProgressRing = () => {
  return <div>
    <svg className="progress-ring">
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
  </div>;
}

export default ProgressRing;