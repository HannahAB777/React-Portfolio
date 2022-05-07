import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import MainLayout from "./layout/public-layout";
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
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

</MainLayout>

    </BrowserRouter>
  );
}

export default App;
