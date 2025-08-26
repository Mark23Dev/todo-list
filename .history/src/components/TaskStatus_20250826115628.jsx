import { FaClipboard } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const TaskStatus = () => {
  const statusData = [
    { label: "In Progress", color: "blue", percentage: 70 },
    { label: "Completed", color: "green", percentage: 100 },
    { label: "Not Started", color: "gray", percentage: 0 },
  ];

  return (
    <div className="task-status flex flex-col min-w-0 min-h-0 shadow-2xl border-[1px] border-gray-500/80 rounded-xl p-4 w-full">
      <div className="heading">
        <FaClipboard />
        <span>Task Status</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-4">
        {statusData.map((status, index) => (
          <div key={index} className="status-item flex flex-shrink-0 flex-col items-center gap-2 my-2">
            <ProgressRing className="min-w-0 min-h-0" 
              radius={30}
              cx={40}
              cy={40}
              strokeWidth={8}
              stroke={status.color}
              fill="transparent"
              height={90}
              width={90}
              label={status.percentage + "%"}
            />
            <span className="text-sm">{status.label}</span>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}
export default TaskStatus;