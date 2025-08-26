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

      <div className="menu flex items-center justify-between w-full max-w-md mt-4 px-4 py-2 bg-blue-200 rounded-lg shadow-sm">
        {/* Icons */}
        <div className="icons flex gap-3">
          <button className="bg-amber-400 w-8 h-8 rounded-md flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
            <FaBell className="text-white w-4 h-4" />
          </button>
          <button className="bg-amber-400 w-8 h-8 rounded-md flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
            <FaCalendar className="text-white w-4 h-4" />
          </button>
        </div>

        {/* Date */}
        <div className="date text-gray-700 text-sm text-right">
          <p className="font-medium">Tuesday</p>
          <p className="font-light">20/08/2025</p>
        </div>
      </div>

      
    </div>
  )
}

export default NavBar;