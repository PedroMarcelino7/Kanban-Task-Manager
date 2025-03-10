// React
import React from 'react'

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
    // Variable

    // Use Effect Logs

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

            <Boards />

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