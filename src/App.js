
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";

<Routes>
  <Route path="/tasks" element={<Home />} />
  <Route path="/tasks/:id" element={<QuestionPage />} />
</Routes>