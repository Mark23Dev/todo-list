import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";

const HomePage = () => {
  return (
    <div className="homePage min-h-screen bg-blue-200">
      <NavBar />
      <div className="flex mt-24">
        <DashBoard />
        <div className="main gap-15 mt-2">
          <div className="heading">
            <h2 className="text-amber-50 text-3xl">Welcome back Sundar</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;