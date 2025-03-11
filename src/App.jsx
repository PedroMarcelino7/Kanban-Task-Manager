import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AppProvider } from './contexts/AppContext'
import { BoardContextProvider } from './contexts/BoardIDContext'
import { BoardProvider } from './contexts/BoardContext'
import { ColumnProvider } from './contexts/ColumnContext'
import { TaskProvider } from './contexts/TaskContext'
import { SubtaskProvider } from './contexts/SubtaskContext'
import { ToastProvider } from './contexts/ToastContext'

function App() {
  return (
    <BoardProvider>
      <ColumnProvider>
        <TaskProvider>
          <SubtaskProvider>
            <ToastProvider>
              <AppProvider>
                <BoardContextProvider>
                  <RouterProvider router={router} />
                </BoardContextProvider>
              </AppProvider>
            </ToastProvider>
          </SubtaskProvider>
        </TaskProvider>
      </ColumnProvider>
    </BoardProvider>
  )
}

export default App
