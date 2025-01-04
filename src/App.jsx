import './App.scss'
import Header from './components/header/main'
import MainPage from './components/main/main'
import Sidebar from './components/sidebar/main'

function App() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar />

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Header />

        <MainPage />
      </div>
    </div>
  )
}

export default App
