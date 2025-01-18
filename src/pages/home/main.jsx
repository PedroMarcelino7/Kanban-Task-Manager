import '../../App.scss'

import { useParams } from 'react-router-dom'

import { useTheme } from '../../contexts/ThemeContext'
import { useState, useEffect } from 'react'

import Header from '../../components/header/main'
import MainPage from '../../components/main/main'
import Sidebar from '../../components/sidebar/main'
import Loading from '../../components/loading/main'

function HomePage() {
    const { board_id } = useParams()
    const { theme } = useTheme()
    const [boards, setBoards] = useState([])
    const [loading, setLoading] = useState(true)

    const getBoards = async () => {
        console.log('Ativado o getBoards')

        try {
            const response = await fetch(`http://localhost:3001/boards`);
            const data = await response.json();
            setBoards(data);
            setLoading(false)

            console.log('Boards: ', data)
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    useEffect(() => {
        getBoards()
        console.log('>>> Board ID:', board_id)
    }, [])

    if (loading) {
        return <Loading height={'100vh'} text={'Loading boards...'} />
    }

    return (
        <div className={`${theme}`} style={{ display: 'flex', overflow: 'hidden' }}>
            <Sidebar boards={boards} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header />

                <MainPage />
            </div>
        </div>
    )
}

export default HomePage
