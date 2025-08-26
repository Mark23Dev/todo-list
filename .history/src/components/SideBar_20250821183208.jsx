import { FaPerson } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col relative w-64 min-h-screen mt-7 shadow-lg rounded-tr-lg bg-blue-800 p-4">
      {/* Example icon usage */}
      <div className="text-white text-4xl mb-4">
        <FaPerson />
      </div>

      {/* You can add sidebar items here */}
      <nav className="flex flex-col gap-3 mt-4 text-white">
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Dashboard</a>
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Profile</a>
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Settings</a>
      </nav>
    </div>
  )
}

export default SideBar;
