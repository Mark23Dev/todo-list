import Card from "../components/Card";

const TaskPage = () => {
  return (
    <div className="flex min-h-screen m-3 mt-6 gap-3">
      <div className="flex flex-col basis-1/3 rounded-2xl border border-gray-500/80">
        <Card />
        <Card />
      </div>
      <div className="flex flex-col basis-2/3 rounded-2xl border border-gray-500/80">
        task
      </div>
    </div>
  );
}

export default TaskPage;
