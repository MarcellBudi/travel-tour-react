import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import DestinationRoute from "./pages/DestinationRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import DestinationDetail from './pages/DestinationDetail';
import AllBlogsPage from "./pages/AllBlogsPage";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="destinations" element={<DestinationRoute />} />
            <Route path="/destinations/:type" element={<DestinationDetail />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogsDetails />} />
            <Route path="/all-blogs" element={<AllBlogsPage />} /> {/* Halaman Semua Blog */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
