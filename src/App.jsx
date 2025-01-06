import './App.scss'
import Header from './components/header/main'
import MainPage from './components/main/main'
import Modal from './components/modals/main'
import Sidebar from './components/sidebar/main'
import ViewTaskModal from './components/modals/viewtask/main'
import AddTaskModal from './components/modals/addtask/main'

function App() {
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <Sidebar />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />

        <MainPage />
      </div>

      <Modal>
        <AddTaskModal />
      </Modal>
    </div>
  )
}

export default App
