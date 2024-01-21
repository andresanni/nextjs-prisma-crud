import TaskCard from "/src/components/TaskCard";
import {prisma } from "../libs/prisma"

const loadTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
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
