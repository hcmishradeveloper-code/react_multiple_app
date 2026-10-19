import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </Router>
  );
}
