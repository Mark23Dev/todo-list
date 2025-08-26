import SideBar from "./SideBar"

const DashBoard = () =>{
  return (
    <main className="flex min-h-screen">
    <SideBar className="w-64 bg-blue-800" />
    <div className="flex-1 bg-blue-200 p-6">
      <PageContent />
    </div>
  </main>

  )
}

export default SideBar;