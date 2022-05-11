import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import MainLayout from "./layout/public-layout";
import About from "./components/about/about";
import "./App.css"  ;

function App() {
  //about
  //projects
  //homepage
  //contact me
  return (
    <BrowserRouter>

    <MainLayout>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

</MainLayout>

    </BrowserRouter>
  );
}

export default App;
