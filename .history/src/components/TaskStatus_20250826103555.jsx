import { FaClipboard } from "react-icons/fa";
import ProgressRing from "./ProgressRing";

const TaskStatus = () => {
  return (
    <div className="task-status">
      <div className="heading">
        <FaClipboard />
        <span>Task Status</span>
      </div>
      <div className="status-visuals">
          <div className="">
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
          <div className="">
            <ProgressRing 
              radius="4"
              cx="6"
              cy="6"
              strokeWidth="1.5"
              stroke="green"
              fill="transparent"
            />
            <span>Completed</span>
          </div>
          <div className="">
            <ProgressRing 
              radius="4"
              cx="6"
              cy="6"
              strokeWidth="1.5"
              stroke="green"
              fill="transparent"
            />
            <span>Not Started</span>
          </div>
      </div>
      
    </div>
  );
}
export default TaskStatus;