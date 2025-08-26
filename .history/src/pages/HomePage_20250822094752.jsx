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
          <div className="flex w-full h-full border-2 border-blue-700 shadow-4xl shadow-gray-900 my-5">
            <div className="flex m-3 w-full shadow-2xl rounded-xl"></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;