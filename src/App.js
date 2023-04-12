import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route
      path="/"
      element={<Home />}/>
      <Route
      path="/about"
      element={<About />}/>
      <Route
      path="/skills"
      element={<Skills />}/>
      <Route
      path="/portfolio"
      element={<Portfolio />}/>
      <Route
      path="/contact"
      element={<Contact />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
