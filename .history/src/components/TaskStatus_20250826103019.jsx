import { FaClipboard } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const TaskStatus = () => {
  return (
    <div className="task-status">
      <div className="heading">
        <FaClipboard />
        <span>Task Status</span>
      </div>
      <div className="status-visual">
        <ProgressRing 
          radius="4"
          cx="6"
          cy="6"
          strokeWidth="1.5"
          stroke="blue"
          fill="transparent"
        />
        <span>In Progress</span>
      </div>
    </div>
  );
}
export default TaskStatus;