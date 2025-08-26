import HomePage from "./pages/HomePage"
import Navbar from "./components/NavBar"
import Sidebar from "./components/SideBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <div className="min-h-screen flex">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
