import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AppProvider } from './contexts/AppContext'
import { BoardContextProvider } from './contexts/BoardContext'

function App() {
  return (
    <AppProvider>
      <BoardContextProvider>
        <RouterProvider router={router} />
      </BoardContextProvider>
    </AppProvider>
  )
}

export default App
