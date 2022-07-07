import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }
  }, [spinner]);
  return (
    !loading && (
      <div className="App   ">
        {/* <Navbar></Navbar> */}

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>
      </div>
    )
  );
}

export default App;
