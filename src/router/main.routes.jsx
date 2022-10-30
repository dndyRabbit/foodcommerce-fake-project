import React from "react";

import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main.page";
import Menus from "../pages/Menu.page";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menus />} />
      <Route path="*" element={<>NO PAGE FOUND.</>} />
    </Routes>
  );
};

export default MainRoutes;
