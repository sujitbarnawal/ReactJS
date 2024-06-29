import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouteProvider, createBrowserRouter} from 'react-router-dom'

// import App from './App.jsx'
import './index.css'
import Layout from './src/layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {path:"",
        element:<Home/>
      },
      {
        path:"",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteProvider router={router}/>
  </React.StrictMode>,
)
