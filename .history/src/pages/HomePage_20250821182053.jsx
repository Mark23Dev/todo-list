import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";

const HomePage = () => {
  return (
    <div className="homePage min-h-screen bg-blue-200">
      <NavBar />
      <DashBoard />
    </div>
  )
}
export default HomePage;