import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";
import { FaPeopleGroup } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="homePage flex flex-col w-full min-h-screen bg-blue-200">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <DashBoard />
        <div className="main flex w-full flex-col mt-2 mr-10">
          <div className="heading flex w-full justify-between">
            <div className="">
              <h2 className="text-amber-500 text-3xl font-extrabold">Welcome back Sundar</h2>
            </div>
            <div className="invites flex gap-2">
              <div className="img flex gap-1 mt-1.5">
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
              </div>
              <button className="flex gap-2 items-center justify-center text-sm py-1 px-2 hover:bg-blue-800 hover:text-white hover:shadow-2xl text-blue-800  rounded-md border-2 border-blue-800">
                <FaPeopleGroup />
                Invite
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full h-full border-[1px] border-blue-500 shadow-4xl shadow-gray-900 my-5">
            <div className="flex m-5 w-full shadow-2xl rounded-xl gap-3">
              <div className="flex flex-1 [box-shadow:0px_0_6px_rgba(0,0,0,0.1)] rounded-md h-96 m-2">
                <div className="">
                  <div className="todo">
                    
                  </div>
                  <div className="add-task"></div>
                </div>
              </div>
              <div className="flex flex-1 rounded-md h-full m-2">Mark</div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;