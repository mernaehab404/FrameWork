import About from "./component/About/About";
import Home from "./component/Home/Home";
import Layout from "./component/MaterLayout/Layout";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
const router = createBrowserRouter([
  { path: "", element: <Layout />,children: [
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"port",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
  ]},
])
export default function App(){
  return(
      <>
  <RouterProvider router={router}/>
      </>
    ) }