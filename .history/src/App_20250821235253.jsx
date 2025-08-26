import HomePage from "./pages/HomePage"
// import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex">
      {/* Sidebar */}
      <Sidebar />

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
