const MainLayout = ({ children }) => {
  return (
    <div className="homePage flex flex-col w-full min-h-screen">
      <NavBar />
      <div className="flex gap-10 mt-24">
        <DashBoard />
        <main className="overflow-auto">{children}</main>
      </div>
      
    </div>
  );
}
export default MainLayout;