import { useShowForm } from "../useStore";

const AddTaskModal = () => {
  const { closeForm } = useShowForm();

  return (
    <div className="flex fixed inset-0 items-center justify-center z-200">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="invite-form flex flex-col absolute top-20 right-[30%] z-200 bg-white border-[1px] border-gray-500/80 w-100 h-100">
        <div className="header m-3 text-[14px] font-bold flex justify-between">
          <span>Add New Task</span>
          <span onClick={closeForm} className="cursor-pointer hover:underline">Go Back</span>
        </div>
        <div className="card text-[12px] flex flex-col justify-between gap-2 p-3 border-[1px] border-gray-500/80 h-full m-3">
          <div className="">
            <p>Email</p>
            <div className="flex search justify-between items-center min-h-0 w-full">
              <input type="email" className="border-[1px] w-3/4 h-8 border-gray-500/80 rounded-sm mt-2 p-1" placeholder="email@example.com" />
            </div>
          </div>
          <div className="project-link">
            <p>Project Link</p>
            <div className="flex search justify-between items-center min-h-0 w-full">
              <input type="email" className="border-[1px] w-3/4 h-8 border-gray-500/80 rounded-sm mt-2 p-1" placeholder="https://example.com/project-name" />
              <button className="bg-red-500/80 text-white  w-1/5 h-8 rounded-sm p-1 mt-2 hover:bg-red-500/90">Copy Link</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}  
export default AddTaskModal;