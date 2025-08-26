import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";
import { FaPeopleGroup } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="homePage flex min-h-screen bg-blue-200">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <DashBoard />
        <div className="main flex w-full flex-col mt-2">
          <div className="heading flex w-full justify-between">
            <div className="">
              <h2 className="text-amber-500 text-3xl font-extrabold">Welcome back Sundar</h2>
            </div>
            <div className="invites flex gap-2">
              <div className="img flex gap-1">
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-6 h-6 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
              </div>
              <button className="flex gap-2 items-center justify-center p-2 hover:bg-blue-800 hover:text-white hover:shadow-2xl  rounded-md border-blue-800">
                <FaPeopleGroup />
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;