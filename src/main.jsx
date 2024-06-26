import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import ChangeBackground from './components/ChangeBackground.jsx'
import Search4Recipies from './components/Search4Recipies.jsx'
import RecipiesCards from './components/RecipiesCards.jsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ChangeBackground",
    element: <ChangeBackground />,
  },
  {
    path: "/Search4Recipies",
    element: <Search4Recipies />,
  },
  {
    path: "/recipiesCards/:id",
    element: <RecipiesCards />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
