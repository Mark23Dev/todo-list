import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import DashBoard from "../components/Dashboard";

const MainLayout = () => {
  return (
    <div className="homePage flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <DashBoard />
        <Outlet />
      </div>
      
    </div>
  );
}
export default MainLayout;