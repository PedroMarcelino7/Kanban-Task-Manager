import './App.scss'
import Header from './components/header/main'
import MainPage from './components/main/main'
import Modal from './components/modals/main'
import Sidebar from './components/sidebar/main'
import ViewTaskModal from './components/modals/viewtask/main'
import AddTaskModal from './components/modals/addtask/main'
import EditTaskModal from './components/modals/edittask/main'
import AddBoardModal from './components/modals/addboard/main'
import EditBoardModal from './components/modals/editboard/main'
import DeleteBoardModal from './components/modals/deleteboard/main'
import DeleteTaskModal from './components/modals/deletetask/main'
import { useTheme } from './contexts/ThemeContext'
import { useEffect, useState } from 'react'

function App() {
  const { theme } = useTheme()
  const [boards, setBoards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getBoards = async () => {
    console.log('Ativado o getBoards')

    try {
      const response = await fetch(`http://localhost:3001/boards`);
      const data = await response.json();
      setBoards(data);
      setIsLoading(false)

      console.log('Boards: ', data)
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    getBoards()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={`${theme}`} style={{ display: 'flex', overflow: 'hidden' }}>
      <Sidebar boards={boards} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />

        <MainPage />
      </div>

      {/* <Modal>
      </Modal> */}
      {/* <DeleteBoardModal /> */}
      {/* <AddBoardModal /> */}
      {/* <AddTaskModal /> */}
      {/* <DeleteTaskModal /> */}
      {/* <EditBoardModal /> */}
      {/* <EditTaskModal /> */}
      {/* <ViewTaskModal /> */}
    </div>
  )
}

export default App
