import Card from "./Card";

const MyTasks = () => {
  return (<div className="flex min-h-screen w-full m-3 mt-6 gap-3">
    <div className="flex flex-col flex-1 basis-1/3 min-h-screen rounded-2xl border-[1px] border-gray-500/80">
      <Card />
      <Card />
    </div>
    <div className="flex flex-1 basis-2/3 flex-col min-h-screen rounded-2xl border-[1px] border-gray-500/80">
      task
    </div>
  </div>
  );
}

export default MyTasks;