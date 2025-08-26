import { Outlet } from "react-router-dom";

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