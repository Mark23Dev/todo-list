import HomePage from "./pages/HomePage"
import Navbar from "./components/NavBar"
import Sidebar from "./components/SideBar"

function App() {
  return (
    <div className="min-h-screen bg-blue-200 text-white flex">
      {/* Main content */}
        <main className="p-4 mt-16">
          <HomePage />
        </main>
    </div>
  )
}

export default App
