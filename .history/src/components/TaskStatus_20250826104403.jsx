import { FaClipboard } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const TaskStatus = () => {
  const statusData = [
    { label: "In Progress", color: "blue" },
    { label: "Completed", color: "green" },
    { label: "Not Started", color: "gray" },
  ];

  return (
    <div className="task-status">
      <div className="heading">
        <FaClipboard />
        <span>Task Status</span>
      </div>
      {statusData.map((status, index) => (
        <div key={index} className="status-item flex items-center gap-2 my-2">
          <ProgressRing 
            radius="10"
            cx="20"
            cy="20"
            strokeWidth="4"
            stroke={status.color}
            fill="transparent"
          />
          <span className="text-sm">{status.label}</span>
        </div>
      ))}
      
      
    </div>
  );
}
export default TaskStatus;