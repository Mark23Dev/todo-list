import { FaPeopleGroup } from "react-icons/fa6";
import { FaClipboard, FaPlus } from "react-icons/fa";
import Card from "../components/Card";
import TaskStatus from "../components/TaskStatus";
import CompletedTasks from "../components/CompletedTasks";
import { useState } from "react";

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div className="main flex w-full flex-col mt-2 mx-3">
      <div className="heading flex w-full justify-between">
        <div className="">
          <h2 className="text-black text-3xl font-bold">Welcome back Sundar</h2>
        </div>
        <div className="invites flex gap-2">
          <div className="img flex gap-1 mt-1.5">
            <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
            <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
            <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
            <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
            <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
          </div>
          <button onClick={handleForm} className="flex gap-2 items-center justify-center text-sm py-1 px-2 hover:bg-red-500/80 hover:text-white hover:shadow-2xl text-red-500/80  rounded-md border-[1px] border-red-500/80">
            <FaPeopleGroup />
            Invite
          </button>
          <div className="invite-form flex flex-col absolute top-30 right-[30%] z-200 fixed bg-white border-[1px] border-gray-500/80 w-100 h-100">
            <div className="header">
              <span>Send an invite to a new member</span>
              <span onClick={handleForm} className="cursor-pointer">Go Back</span>
            </div>
            <div className="card"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full h-full border-[1px] border-gray-500/80 shadow-4xl shadow-gray-900 my-5">
        <div className="flex flex-col lg:flex-row items-center justify-center m-3 w-full shadow-2xl rounded-xl gap-3">
          <div className="flex flex-col flex-1 h-full [box-shadow:0px_0_6px_rgba(0,0,0,0.1)] rounded-md p-3 m-0 mb-4 max-w-6xl mx-auto">
            <div className="flex justify-between w-full p-2">
              <div className="todo flex">
                <FaClipboard />
                <span>To-Do</span>
              </div>
              <div className="add-task flex">
                <FaPlus />
                <span>Add Task</span>
              </div>
            </div>

            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="flex flex-col flex-1 rounded-md h-full m-2 mr-3.5">
            <TaskStatus />
            <CompletedTasks />
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default HomePage;