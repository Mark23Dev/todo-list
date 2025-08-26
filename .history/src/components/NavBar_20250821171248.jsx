import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between p-2 shadow-md shadow-amber-100 bg-amber-50">
      <div className="logo">
        <h1>DashBoard</h1>
      </div>
      <div className="search flex">
        <input type="text" placeholder="Search your tasks here..." />
        <div className="bg-amber-300 h-6 w-6 rounded-sm inline-flex items-center justify-center">
          <FaSearch className="text-white" />
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