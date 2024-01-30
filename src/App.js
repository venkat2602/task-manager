import "./App.css";
import Task from "./components/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function onDelete(id) {
    setTasks(
      tasks.filter((task, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div className='text-2xl'>
      <Header />
      <CreateTask addTask={addTask} />
      <div className='grid grid-cols-2 sm:grid-cols-4 place-content-center place-items-center gap-3 mt-10 mx-5'>
        {tasks.map((task, index) => {
          return <Task key={index} {...task} id={index} onDelete={onDelete} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
