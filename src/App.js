import "./App.css";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="exercise1" element={<Exercise1 />} />
          <Route path="exercise2" element={<Exercise2 />} />
          <Route path="exercise3" element={<Exercise3 />} />
          <Route path="exercise4" element={<Exercise4 />} />
          <Route path="exercise5" element={<Exercise5 />} />
          <Route path="exercise6" element={<Exercise6 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
