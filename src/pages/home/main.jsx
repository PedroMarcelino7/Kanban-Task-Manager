import '../../App.scss'

import { useParams } from 'react-router-dom'

import { useTheme } from '../../contexts/ThemeContext'
import { useState, useEffect } from 'react'

import Header from '../../components/header/main'
import MainPage from '../../components/main/main'
import Sidebar from '../../components/sidebar/main'
import Loading from '../../components/loading/main'
import { appData } from '../../contexts/AppContext'

function HomePage() {
    const { data } = appData()
    const { theme } = useTheme()
    const { board_id } = useParams()
    const [loading, setLoading] = useState(false)
    const [boards, setBoards] = useState([])

    useEffect(() => {
        console.log('>>> Board ID:', board_id)
        console.log('>>> Dados Estruturados [Home]: ', data)
    }, [])

    if (loading) {
        return <Loading height={'100vh'} text={'Loading boards...'} />
    }

    return (
        <div className={`${theme}`} style={{ display: 'flex', overflow: 'hidden' }}>
            <Sidebar boards={data} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header />

                <MainPage />
            </div>
        </div>
    )
}

export default HomePage
