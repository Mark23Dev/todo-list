import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import MyTasks from "./components/MyTasks"

function App() {
  return (
    <div className="min-h-screen flex">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-tasks" element={<MyTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
