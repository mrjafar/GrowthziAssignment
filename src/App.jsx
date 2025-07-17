import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './component/Layout/AppLayout'
import Services from './pages/Services'
import Home from './pages/Home'
import Modal from 'react-modal'
Modal.setAppElement('#root');

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/services',
          element: <Services />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
