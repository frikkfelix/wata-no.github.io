import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/Home'
import Solutions from '../pages/Solutions'
import Contact from '../pages/Contact'
import About from '../pages/About'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { element: <Home />, index: true },
        { path: '/solutions', element: <Solutions />  },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
      ]
    },
  ])
}