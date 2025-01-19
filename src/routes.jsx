import { createBrowserRouter } from 'react-router-dom'

// Pages
import HomePage from './pages/home/main'
import NotFoundPage from './pages/notfound/main'
import LoadingPage from './pages/loading/main'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoadingPage />
    },
    {
        path: "/:board_id",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])

export { router }