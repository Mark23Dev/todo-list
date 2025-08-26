import Card from "../components/Card";

const TaskPage = () => {
  return (
    <div className="flex min-h-screen mx-7 mt-6 gap-3 w-full">
      <div className="flex flex-col flex-1 min-h-screen rounded-2xl border-[1px] border-gray-500/80">
        <span className="">My Tasks</span>
        <Card />
        <Card />
      </div>
      <div className="flex flex-1 flex-col min-h-screen rounded-2xl border-[1px] border-gray-500/80">
        <div className="flex p-3 gap-2">
          <img className="h-24 w-24 rounded-xl object-cover" src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
          <div className="mt-5">
            <p className="text-[12px] mb-1">Attend a Birthday party at Kilimani</p>
            <p className="text-[10px] mb-1">Priority: Moderate</p>
            <p className="text-[10px] mb-1">Status: In Progress</p>
            <p className="text-[10px]">Created On: 23/08/2025</p>
          </div>
        </div>
        <div className="p-3">
          <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus soluta ipsam eligendi nulla ullam neque praesentium asperiores nesciunt, quo consequuntur et voluptatibus excepturi, voluptate hic, dignissimos veniam deleniti debitis fugit.</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;