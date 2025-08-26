import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";

const HomePage = () => {
  return (
    <div className="homePage flex min-h-screen bg-blue-200">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <DashBoard />
        <div className="main mt-2">
          <div className="heading">
            <h2 className="text-amber-50 text-3xl">Welcome back Sundar</h2>
          </div>
          <div className=""></div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;