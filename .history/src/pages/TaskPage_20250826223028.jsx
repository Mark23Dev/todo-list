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
        <img src="" alt="" />
        <span className="">Attend a Birthday party at Kilimani</span>
        <span className="">Priority: Moderate</span>
        <span className="">Status: In Progress</span>
        <span className="">Due Date: 25th December, 2025</span>
      </div>
    </div>
  );
}

export default TaskPage;