import React from "react";

import { Route, Routes} from "react-router-dom";

import {Landing,Home,About,Contact} from './Routes/pages'
import { paths } from "./Routes/paths";


const App = () => {
  return (
    
      <Routes>
        <Route path={paths.landing} element={<Landing />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    
  );
};

export default App;
