import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="homePage flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex mt-24">
        <SideBar />
        <div className="flex flex-1 min-h-screen gap-2">
          <Outlet />
        </div>
        
      </div>
      
    </div>
  );
}
export default MainLayout;