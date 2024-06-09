import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.css";
import RouterProvider from "./components/Provider/RouterProvider";
import QueryProvider from "./components/Provider/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  </React.StrictMode>
);
