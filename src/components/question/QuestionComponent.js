import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function QuestionComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      navigate("/tasks");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Task ID: {id}</h2>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={() => navigate("/tasks")}>Back</button>
    </div>
  );
}

export default QuestionComponent;