import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sec from './Sec';
import Cont from './Cont';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sec></Sec>,
  },
  {
    path: "/contact",
    element: <Cont></Cont>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App