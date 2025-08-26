import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";

const HomePage = () => {
  return (
    <div className="homePage min-h-screen bg-blue-200">
      <NavBar />
      <div className="flex mt-24">
        <DashBoard />
        <div className="main gap-10">
          <div className="heading">
            <h2>Welcome back Sundar</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HomePage;