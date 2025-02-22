import '../../App.scss'

import { useParams } from 'react-router-dom'

import { useTheme } from '../../contexts/ThemeContext'
import { useState, useEffect } from 'react'

import Header from '../../components/header/main'
import MainPage from '../../components/main/main'
import Sidebar from '../../components/sidebar/main'
import Loading from '../../components/loading/main'
import { appData } from '../../contexts/AppContext'
import { getBoardId } from '../../contexts/BoardContext'

function HomePage() {
    const { boardId, updateBoardId } = getBoardId()
    const { data } = appData()
    const { theme } = useTheme()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('>>> Dados Estruturados [Home]: ', data)
        console.log('>>> Board ID Context [Home]:', boardId)
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
