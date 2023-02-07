import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../page";

function Conect() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Conect;
