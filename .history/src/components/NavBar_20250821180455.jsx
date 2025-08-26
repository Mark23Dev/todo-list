import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between p-5">
      <div className="logo flex items-center justify-center mt-6">
        <h1 className="text-3xl font-bold text-blue-900 tracking-wide drop-shadow-md">
          DashBoard
        </h1>
      </div>

      <div className="flex justify-center w-full mt-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search your tasks..."
            className="w-full py-2 pl-4 pr-10 rounded-lg bg-blue-100 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>

      <div className="menu flex gap-5">
        <div className="icons flex gap-2 p-2">
          <div className="bg-amber-300 h-6 w-6 rounded-sm inline-flex items-center justify-center">
            <FaBell className="text-white" />
          </div>
          <div className="bg-amber-300 h-6 w-6 rounded-sm inline-flex items-center justify-center">
            <FaCalendar className="text-white" />
          </div>
        </div>
        <div className="date">
          <p>Tuesday</p>
          <p>20/08/2025</p>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar;