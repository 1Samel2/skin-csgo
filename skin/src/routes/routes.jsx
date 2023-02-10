import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, ProductAll,InfoProduct } from "../page";

function Conect() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos-os-produtos" element={<ProductAll/>} />
        <Route path="/info-produtos" element={<InfoProduct/>} />
      </Routes>
    </Router>
  );
}

export default Conect;
