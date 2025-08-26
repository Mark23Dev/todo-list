import HomePage from "./pages/HomePage"
import Navbar from "./components/NavBar"
import Sidebar from "./components/SideBar"

function App() {
  return (
    <div className="min-h-screen text-white flex">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-4 mt-16">
          <HomePage />
        </main>
      </div>
    </div>
  )
}

export default App
