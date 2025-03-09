import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AppProvider } from './contexts/AppContext'
import { BoardContextProvider } from './contexts/BoardIDContext'
import { BoardProvider } from './contexts/BoardContext'
import { ColumnProvider } from './contexts/ColumnContext'
import { TaskProvider } from './contexts/TaskContext'
import { SubtaskProvider } from './contexts/SubtaskContext'

function App() {
  return (
    <BoardProvider>
      <ColumnProvider>
        <TaskProvider>
          <SubtaskProvider>
            <AppProvider>
              <BoardContextProvider>
                <RouterProvider router={router} />
              </BoardContextProvider>
            </AppProvider>
          </SubtaskProvider>
        </TaskProvider>
      </ColumnProvider>
    </BoardProvider>
  )
}

export default App
