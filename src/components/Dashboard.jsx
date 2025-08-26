import SideBar from "./SideBar"

const DashBoard = () =>{
  return (
    <main className="flex min-h-screen">
    <SideBar />
    <div className="flex-1 z-0 p-6">
      <PageContent />
    </div>
  </main>

  )
}

export default SideBar;