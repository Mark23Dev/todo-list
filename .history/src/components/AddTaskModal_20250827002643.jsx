const AddTaskModal = ({handleForm}) => {
  return (
    <div className="flex fixed inset-0 items-center justify-center z-200 m-3">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="invite-form flex flex-col absolute top-20 right-[30%] z-200 bg-white border-[1px] border-gray-500/80 w-100 h-100">
          <div className="header">
            <span>Send an invite to a new member</span>
            <span onClick={handleForm} className="cursor-pointer">Go Back</span>
          </div>
          <div className="card text-[12px] flex flex-col gap-2 p-3 border-[1px] border-gray-500/80 h-full m-3">
            <p>Email</p>
            <div className="flex search justify-between min-h-0 w-full">
              <input type="email" className="border-[1px] border-gray-500/80 rounded-md p-1" />
              <button className="bg-red-500/80 text-white rounded-md p-1 mt-2 hover:bg-red-500/90">Send Invite</button>
            </div>
            <p>Members</p>
            <div className="members flex flex-col gap-1">
              <div className="member flex justify-between">
                <div className="flex gap-2 items-center">
                  <img className="h-6 w-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                  <span>Sundar Pichai</span>
                </div>
                <div className="dropdown">
                  <select id="yesNo" name="yesNo">
                    <option value="yes">Can Edit</option>
                    <option value="no">Owner</option>
                  </select>
                </div>
              </div>
              <div className="member flex justify-between">
                <div className="flex gap-2 items-center">
                  <img className="h-6 w-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                  <span>Sundar Pichai</span>
                </div>
                <div className="dropdown">
                  <select id="yesNo" name="yesNo">
                    <option value="yes">Can Edit</option>
                    <option value="no">Owner</option>
                  </select>
                </div>
              </div>
              <div className="member flex justify-between">
                <div className="flex gap-2 items-center">
                  <img className="h-6 w-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                  <span>Sundar Pichai</span>
                </div>
                <div className="dropdown">
                  <select id="yesNo" name="yesNo">
                    <option value="yes">Can Edit</option>
                    <option value="no">Owner</option>
                  </select>
                </div>
              </div>
              <div className="member flex justify-between">
                <div className="flex gap-2 items-center">
                  <img className="h-6 w-6 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                  <span>Sundar Pichai</span>
                </div>
                <div className="dropdown">
                  <select id="yesNo" name="yesNo">
                    <option value="yes">Can Edit</option>
                    <option value="no">Owner</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  )
}  
export default AddTaskModal;