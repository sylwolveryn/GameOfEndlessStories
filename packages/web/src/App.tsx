import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../components/routes/Home'
import { Play } from '../components/routes/Play'
import './App.css'

const router = createBrowserRouter([
  {
    //element: <AppLayout />,
    //errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "play/:gameId",
        element: <Play />,
      },
    ]
  },
])

export const App = () => <RouterProvider router={router} />
