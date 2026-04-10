import { useNavigate, useParams } from "react-router-dom";

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteTask = async () => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE"
      });
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

export default QuestionPage;