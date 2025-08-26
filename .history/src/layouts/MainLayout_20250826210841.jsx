import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="homePage flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <main className="flex min-h-screen gap-2">
          <SideBar />
          <Outlet />
        </main>
        
      </div>
      
    </div>
  );
}
export default MainLayout;