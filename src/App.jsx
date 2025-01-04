import './App.scss'
import Header from './components/header/main'
import MainPage from './components/main/main'
import Sidebar from './components/sidebar/main'

function App() {
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <Sidebar />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />

        <MainPage />
      </div>
    </div>
  )
}

export default App
