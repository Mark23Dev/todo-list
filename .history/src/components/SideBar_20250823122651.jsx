import { FaHome, FaExclamationCircle, FaCheckSquare, FaList, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar relative w-64 min-h-screen mt-7 rounded-tr-lg bg-red-500/80 backdrop-blur-md shadow-lg shadow-blue-900/50 p-4 text-white flex flex-col items-center">
      {/* Profile section */}
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute -top-12">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md border-2 border-blue-500">
            {/* Replace with <img src="..." /> for real image */}
            <FaHome className="text-blue-800 w-10 h-10" />
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="font-semibold text-lg">Sundar Gurung</p>
          <p className="text-sm text-blue-200">sundargurung360@gmail.com</p>
        </div>
      </div>

      {/* Sidebar navigation */}
      <nav className="mt-6 w-full flex flex-col gap-3">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-red-500/80 hover:bg-white hover:text-red-500/80 transition-colors">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-red-500/80 hover:bg-white transition-colors">
          <FaExclamationCircle /> Vital Task
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-red-500/80 hover:bg-white transition-colors">
          <FaCheckSquare /> My Task
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-red-500/80 hover:bg-white transition-colors">
          <FaList /> Task Categories
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-red-500/80 hover:bg-white transition-colors">
          <FaCog /> Settings
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-red-500/80 hover:bg-white transition-colors">
          <FaQuestionCircle /> Help
        </a>
      </nav>

      {/* Logout at bottom */}
      <div className="mt-auto w-full">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <FaSignOutAlt /> Logout
        </a>
      </div>
    </div>
  );
}

export default SideBar;
