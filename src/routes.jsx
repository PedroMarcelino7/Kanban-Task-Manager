import { createBrowserRouter } from 'react-router-dom'

// Pages
import HomePage from './pages/home/main'
import NotFoundPage from './pages/notfound/main'
import LoadingPage from './pages/loading/main'
import Testes from './pages/testes/main'

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <LoadingPage />
    // },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: '/testes',
        element: <Testes />
    }
])

export { router }