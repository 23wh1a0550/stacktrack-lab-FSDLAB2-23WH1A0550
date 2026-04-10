import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const STUDENT_ID = "23WH1A0550";
const LAB_ID = "TASK_LAB";

function Home() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err));
  }, []);
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE"
      });
      setTasks(prev => prev.filter(task => task._id !== id));

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <h2>All Tasks</h2>

      {tasks.map(task => (
        <div key={task._id}>
          {task._id}

          <button onClick={() => navigate(`/tasks/${task._id}`)}>
            View
          </button>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;