import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";

  import Homepage from "./pages/Homepage";
  import Generator from "./pages/Generator";
  
  export default function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </HashRouter>
    );
  }
  