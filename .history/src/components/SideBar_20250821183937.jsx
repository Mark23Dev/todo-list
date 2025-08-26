import { FaPerson } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="sidebar relative w-64 min-h-screen mt-7 shadow-lg rounded-tr-lg bg-blue-800">
      {/* Profile icon at top center */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 border-blue-500">
        <FaPerson className="text-blue-800 w-6 h-6" />
      </div>

      {/* User info */}
      <div className="mt-0 text-center text-white px-4">
        <p className="font-semibold text-lg">John Doe</p>
        <p className="text-sm text-blue-200">john.doe@example.com</p>
      </div>

      {/* Sidebar content */}
      <nav className="flex flex-col gap-3 mt-6 p-4 text-white">
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Dashboard</a>
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Profile</a>
        <a href="#" className="hover:bg-blue-700 rounded-md px-3 py-2 transition-colors">Settings</a>
      </nav>
    </div>
  )
}

export default SideBar;
