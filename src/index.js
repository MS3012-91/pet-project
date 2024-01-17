import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/router";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import SimpleMovingButton from "./components/Buttons/SimpleMovingButton/SimpleMovingButton";


const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(routes, {
  basename: "/pet-project",
});

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <SimpleMovingButton>
        <App />
      </SimpleMovingButton>
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
