import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";

  import { useState } from "react";
import { Context } from "./assets/Context";
  
  import Homepage from "./pages/Homepage";
  import Generator from "./pages/Generator";
  
  export default function App() {
    const [context, setContext] = useState();
    return (
      
      <Context.Provider value={[context, setContext]}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </HashRouter>
      </Context.Provider>
    );
  }
  