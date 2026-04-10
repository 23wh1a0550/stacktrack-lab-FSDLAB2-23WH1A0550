import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}