import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import TaskPage from "./pages/TaskPage"
import VitalTasks from "./pages/VitalTasks"

function App() {
  return (
    <div className="min-h-screen flex">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-tasks" element={<TaskPage />} />
            <Route path="/vital-tasks" element={<VitalTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
