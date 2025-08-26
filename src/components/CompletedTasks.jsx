import Card from "./Card";

const CompletedTasks = () => {
  return (
    <div className="completed-tasks flex flex-2 flex-col shadow-2xl rounded-xl m-1 mb-0 p-1 w-full">
      <h2>Completed Tasks</h2>
      <div className="ml-3">
        <Card />
        <Card />
      </div>
    </div>
  );
} 
export default CompletedTasks;