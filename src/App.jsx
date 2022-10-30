import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { setGetTotals } from "./redux/actions/cart.action";
import MainRoutes from "./router/main.routes";

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

export default App;
