import '../../App.scss'

import { useTheme } from '../../contexts/ThemeContext'
import { useEffect } from 'react'

import Header from '../../components/header/main'
import MainPage from '../../components/main/main'
import Sidebar from '../../components/sidebar/main'
import DefaultFloatingButton from '../../ui/floatingbutton/defaultfloatingbutton/main'
import { getBoardId } from '../../contexts/BoardIDContext'

function HomePage() {
    const { boardId, updateBoardId } = getBoardId()
    const { theme } = useTheme()

    useEffect(() => {
        console.log('>>> Board ID Context [Home]:', boardId)
    }, [])

    return (
        <div className={`${theme}`} style={{ display: 'flex', overflow: 'hidden' }}>
            <Sidebar />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header />

                <MainPage />
            </div>

            <DefaultFloatingButton />
        </div>
    )
}

export default HomePage
