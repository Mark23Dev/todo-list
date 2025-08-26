import Card from "../components/Card";

const TaskPage = () => {
  return (
    <div className="flex min-h-screen m-3 mt-6 gap-3 w-full">
      <div className="flex flex-col flex-1 min-h-screen rounded-2xl border-[1px] border-gray-500/80">
        <span className="">My Tasks</span>
        <Card />
        <Card />
      </div>
      <div className="flex flex-1 flex-col min-h-screen rounded-2xl border-[1px] border-gray-500/80">
        <div className="flex p-5">
          <img className="h-20 w-20 rounded-xl object-cover" src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />
          <span className="">Attend a Birthday party at Kilimani</span>
          <span className="">Priority: Moderate</span>
          <span className="">Status: In Progress</span>
          <span className="">Created On: 23/08/2025</span>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;