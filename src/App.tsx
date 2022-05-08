import * as React from "react"
import {useRoutes} from "react-router-dom";
import Home from "./components/pages/home";



function App (){
  return useRoutes([
    {
      path:'/home',
      element:<Home/>,
      index:true
    },
    {
      path:'*',
      element:<div>404</div>,
    }
  ])
}
export  default App