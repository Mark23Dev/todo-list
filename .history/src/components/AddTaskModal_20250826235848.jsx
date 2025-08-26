const AddTaskModal = ({handleForm}) => {
  return (
    <div className="flex fixed inset-0 items-center justify-center z-200">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="invite-form flex flex-col absolute top-20 right-[30%] z-200 bg-white border-[1px] border-gray-500/80 w-100 h-100">
          <div className="header">
            <span>Send an invite to a new member</span>
            <span onClick={handleForm} className="cursor-pointer">Go Back</span>
          </div>
          <div className="card text-[12px] flex flex-col gap-2 p-3">
            <p>Email</p>
            <div className="flex search flex-1 gap-2 w-full">
              <input type="email" className="border-[1px] border-gray-500/80 rounded-md p-1" />
              <button className="bg-red-500/80 text-white rounded-md p-1 mt-2 hover:bg-red-500/90">Send Invite</button>
            </div>
          </div>
        </div>

    </div>
  )
}  
export default AddTaskModal;