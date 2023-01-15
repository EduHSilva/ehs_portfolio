import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { About, Projects } from "./views";

const App = () => (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/projetos" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </main>
);

export default App;