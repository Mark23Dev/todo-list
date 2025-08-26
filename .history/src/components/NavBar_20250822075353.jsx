import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex z-100 fixed top-0 left-0 width-full items-center justify-between px-6 py-4 bg-blue-200">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-blue-900 tracking-wide drop-shadow-md">
          DashBoard
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search your tasks..."
            className="w-full py-2 pl-4 pr-10 rounded-lg bg-white/20 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-blue-900 cursor-pointer">
            <FaSearch className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu flex items-center gap-4">
        {/* Icons */}
        <div className="icons flex gap-2">
          <button className="bg-white/30 w-8 h-8 rounded-md flex items-center justify-center hover:bg-white/50 transition-colors duration-200">
            <FaBell className="text-blue-800 w-4 h-4" />
          </button>
          <button className="bg-white/30 w-8 h-8 rounded-md flex items-center justify-center hover:bg-white/50 transition-colors duration-200">
            <FaCalendar className="text-blue-800 w-4 h-4" />
          </button>
        </div>

        {/* Date */}
        <div className="date text-blue-900 text-sm text-right">
          <p className="font-medium">Tuesday</p>
          <p className="font-light">20/08/2025</p>
        </div>
      </div>
    </div>

  )
}

export default NavBar;