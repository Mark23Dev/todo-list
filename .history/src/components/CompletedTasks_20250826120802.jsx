import Card from "./Card";

const CompletedTasks = () => {
  return (
    <div className="completed-tasks flex flex-col shadow-2xl rounded-xl m-1 ml-3 p-1 w-full">
      <h2>Completed Tasks</h2>
      <div className="">
        <Card />
        <Card />
      </div>
    </div>
  );
} 
export default CompletedTasks;