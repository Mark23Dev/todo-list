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
          <div className="heading flex justify-between">
            <h2 className="text-amber-50 text-3xl">Welcome back Sundar</h2>
            <div className="invites flex gap-2">
              <div className="img flex gap-1">
                <img className="w-8 h-8 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-8 h-8 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-8 h-8 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-8 h-8 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
                <img className="w-8 h-8 rounded-md object-cover" src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
              </div>
              <button>
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