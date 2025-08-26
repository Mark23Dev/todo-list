import { FaClipboard } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const TaskStatus = () => {
  return (
    <div className="status">
      <div className="heading">
        <FaClipboard />
        <span>Task Status</span>
      </div>
      <div className="status-visual">
        <ProgressRing />
      </div>
    </div>
  );
}
export default TaskStatus;