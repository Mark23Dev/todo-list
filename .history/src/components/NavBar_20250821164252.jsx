import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex justify-between">
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
    </div>
  )
}

export default NavBar;