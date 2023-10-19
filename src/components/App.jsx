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
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
// const Home = lazy(() => import("../pages/Home"));


export const App = () => {
 
return (
  <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="movies" element={<Movies />} />
    <Route path="movies/:movieId" element={<MovieDetails />} >
      <Route path="subbreads" element={<Subbreads />} />
      <Route path="gallery" element={<Gallery />} />
    </Route >
  </Route>
</Routes>
);
  
};

 