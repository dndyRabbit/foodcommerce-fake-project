import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataProvider from "./redux/store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </DataProvider>
  </React.StrictMode>
);
