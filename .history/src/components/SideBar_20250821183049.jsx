import { FaPerson } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="sidebar flex flex-col relative w-64 min-h-screen mt-7 shadow-black rounded-tr-lg bg-blue-800 ">
      <img src={FaPerson} alt="" />
    </div>
  )
}

export default SideBar;