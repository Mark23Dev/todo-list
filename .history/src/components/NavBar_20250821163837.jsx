import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar flex">
      <div className="logo">
        <h1>DashBoard</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search your tasks here..." />
        <FaSearch />
      </div>
      <div className="menu">
        <FaBell />
        <FaCalendar />
      </div>
    </div>
  )
}

export default NavBar;