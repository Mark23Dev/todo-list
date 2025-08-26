import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between p-2">
      <div className="logo">
        <h1>DashBoard</h1>
      </div>
      <div className="search flex">
        <input type="text" placeholder="Search your tasks here..." />
        <FaSearch />
      </div>
      <div className="menu flex gap-3">
        <FaBell />
        <FaCalendar />
      </div>
      <div className="date">
        <p>Tuesday</p>
        <p>20/08/2025</p>
      </div>
    </div>
  )
}

export default NavBar;