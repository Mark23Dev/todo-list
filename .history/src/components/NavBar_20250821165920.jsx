import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between p-2 bg-green-300">
      <div className="logo">
        <h1>DashBoard</h1>
      </div>
      <div className="search flex">
        <input type="text" placeholder="Search your tasks here..." />
        <FaSearch className="bg-amber-300 text-white p-5 rounded-md" />
      </div>
      <div className="menu flex gap-5">
        <div className="icons flex gap-2 p-2">
          <FaBell />
          <FaCalendar />
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