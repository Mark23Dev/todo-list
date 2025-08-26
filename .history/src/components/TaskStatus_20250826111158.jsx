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
      <div className="flex justify-center items-center gap-6 mt-4">
        {statusData.map((status, index) => (
          <div key={index} className="status-item flex flex-col items-center gap-2 my-2">
            <ProgressRing 
              radius="10"
              cx="50"
              cy="50"
              strokeWidth="6"
              stroke={status.color}
              fill="transparent"
              height="70"
              width="70"
            />
            <span className="text-sm">{status.label}</span>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}
export default TaskStatus;