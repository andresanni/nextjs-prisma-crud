import TaskCard from "/src/components/TaskCard";

const loadTasks = async () => {
  const response = await fetch("http:localhost:3000/api/tasks"); 
  const data = await response.json();
  return data;
};

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
