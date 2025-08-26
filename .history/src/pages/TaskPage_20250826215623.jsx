import Card from "../components/Card";

const TaskPage = () => {
  return (<div className="flex flex-1 min-h-screen m-3 mt-6 gap-3">
    <div className="flex flex-col flex-1 min-h-screen rounded-2xl border-[1px] border-gray-500/80">
      <Card />
      <Card />
    </div>
    <div className="flex flex-1 flex-col min-h-screen rounded-2xl border-[1px] border-gray-500/80">
      task
    </div>
  </div>
  );
}

export default TaskPage;