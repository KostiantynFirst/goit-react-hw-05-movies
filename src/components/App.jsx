import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


const Gallery = lazy(() => import('./Gallery').then(module => ({
    ...module,
    default: module.Gallery,
}))
);

const Subbreads = lazy(() => import('./Subbreads').then(module => ({
    ...module,
    default: module.Subbreads

}))
);

const Home = lazy(() => import("../pages/Home/Home"));
const Dogs = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
// const Home = lazy(() => import("../pages/Home"));


export const App = () => {
 
return (
  <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="dogs" element={<Dogs />} />
    <Route path="dogs/:dogId" element={<MovieDetails />} >
      <Route path="subbreads" element={<Subbreads />} />
      <Route path="gallery" element={<Gallery />} />
    </Route >
  </Route>
</Routes>
);
  
};

 