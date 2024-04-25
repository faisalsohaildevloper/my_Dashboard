import React from "react";

import { Route, Routes} from "react-router-dom";

import {Landing,Home,About,Contact,Category, Group} from './Routes/pages'
import { paths } from "./Routes/paths";



const App = () => {
  return (
    
      <Routes>
        <Route path={paths.landing} element={<Landing />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path={paths.category} element={<Category />} />
        <Route path={paths.group} element={<Group />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    
  );
};

export default App;
