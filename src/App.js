import './App.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import Collection from './Pages/Collection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/collection",
    element: <Collection/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
