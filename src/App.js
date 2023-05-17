import {
    HashRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
  import { RoughNotation } from "react-rough-notation";
  import "./styles/styles.css";
  import Homepage from "./pages/Homepage";
  import Generator from "./pages/Generator";
  
  export default function App() {
    return (
      <HashRouter>
        <NavLink to="/" id="home"><h1><RoughNotation strokeWidth="2"  type="underline" color="#000" animate="true"show="true" >Smoothie Generator</RoughNotation></h1></NavLink>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </HashRouter>
    );
  }
  