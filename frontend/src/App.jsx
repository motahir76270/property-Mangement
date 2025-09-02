import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AllList from './components/alluser'
import './App.css'
import AddlList from './components/addlList'
import EditProperty from './components/editProperty'

const App = () => {
  const router = createBrowserRouter([
    {path: "/" , element: <AllList />},
    {path: "/addProperty" , element: <AddlList />},
    {path: "/editProperty" , element: <EditProperty />}
  ])


  return (
   <RouterProvider router={router} />
  )
}

export default App
