// React
import React, { useEffect } from 'react'
import { useBoards } from '../../contexts/BoardContext'

// Styles
import { SidebarContainer, LogoBox, HideSidebar } from './sidebar.styles'

// Components
import Boards from './boards/main'
import Theme from './theme/main'

// UI Components

// Images | Icons
import LogoLight from '../../assets/logo-dark.svg'
import EyeSlashed from '../../assets/icon-hide-sidebar.svg'

//
//
//
const Sidebar = () => {
    //
    //
    // Variables
    const { boards, refreshBoards } = useBoards()

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Boards [Sidebar main component]:', boards)
    }, [])

    //
    //
    // Other Functions

    //
    //
    //

    return (
        <SidebarContainer>
            <LogoBox>
                <img src={LogoLight} />
            </LogoBox>

            <Boards boards={boards} />

            <Theme />

            <HideSidebar>
                <div>
                    <img src={EyeSlashed} alt="" />
                    <h3>Hide Sidebar</h3>
                </div>
            </HideSidebar>
        </SidebarContainer>
    )
}

export default Sidebar