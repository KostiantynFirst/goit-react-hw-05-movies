import { NavLink, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Dogs from "pages/Dogs";

export const App = () => {
  return <div>
<ul>
  <li>
    <NavLink to="/">Домашняя</NavLink>
  </li>
    
  <li>
  <NavLink to="/dogs">Коллекция</NavLink>
  </li>
</ul>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/:dogId" element={<div>Элемент коллекции </div>} />
    </Routes>
  </div>
};

 