import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "../routes/ErrorPage/ErrorPage.jsx";
import About from "../routes/About/About.jsx";
import Contacts from "../routes/Contacts/Contacts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout.jsx";

// New block - start
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
// New block - end

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
