import { useShowForm } from "../useStore";
import PrioritySelector from "./PrioritySelector";

const AddTaskModal = () => {
  const { closeForm } = useShowForm();

  return (
    <div className="flex fixed inset-0 items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="invite-form flex flex-col absolute top-10 right-[20%] z-200 bg-white border-[1px] border-gray-500/80 w-140 h-110">
        <div className="header m-3 text-[14px] font-bold flex justify-between">
          <span>Add New Task</span>
          <span onClick={closeForm} className="cursor-pointer hover:underline">Go Back</span>
        </div>
        <div className="card text-[12px] flex flex-col gap-1 p-3 border-[1px] border-gray-500/80 m-3">
          <div className="title mb-1">
            <p>Title</p>
            <div className="flex search justify-between items-center min-h-0 w-full">
              <input type="text" className="border-[1px] w-3/4 h-8 border-gray-500/80 rounded-sm p-1" />
            </div>
          </div>
          <div className="date">
            <p>Date</p>
            <div className="flex search justify-between items-center min-h-0 w-full">
              <input type="date" className="border-[1px] w-3/4 h-8 border-gray-500/80 rounded-sm p-1" />
            </div>
          </div>
          <div className="priority">
            <p className="">Priority</p>
            <PrioritySelector />
          </div>
          <div className="flex">
            <div className="task-description flex flex-col">
              <p className="font-bold">Task Description</p>
              <textarea className="border-[1px] w-full h-30 border-gray-500/80 rounded-sm mt-2 p-1 resize-none" placeholder="Start writing here..."></textarea>
            </div>
            <div className="upload-image flex flex-col">
              <p className="font-bold">Upload Image</p>
              <input type="file" className="border-[1px] w-full h-30 border-gray-500/80 rounded-sm mt-2 p-1" />
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}  
export default AddTaskModal;