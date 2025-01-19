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

    // const getBoards = async () => {
    //     console.log('Ativado o getBoards')

    //     try {
    //         const response = await fetch(`http://localhost:3001/boards`);
    //         const data = await response.json();
    //         setBoards(data);
    //         setLoading(false)

    //         console.log('Boards: ', data)
    //     } catch (error) {
    //         console.log('Error: ', error);
    //     }
    // };

    useEffect(() => {
        // getBoards()
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
