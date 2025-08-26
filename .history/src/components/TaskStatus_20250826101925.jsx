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
        <ProgressRing />
        <span>In Progress</span>
      </div>
    </div>
  );
}
export default TaskStatus;