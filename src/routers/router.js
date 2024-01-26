import Root from "../pages/Root"
import routes from "./pathRouter"
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      {
      routes.map(({path, Component, index})=>{
        return(
          <Route
            key={path} 
            path={path}
            index={index}
            element={Component} 
          />
        )
      })
    }
    </Route>
  )
)

export default router