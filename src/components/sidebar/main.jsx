import React, { useEffect } from 'react'
import { SidebarContainer, LogoBox, HideSidebar } from './sidebar.styles'
import LogoLight from '../../assets/logo-dark.svg'
import Boards from './boards/main'
import Theme from './theme/main'
import EyeSlashed from '../../assets/icon-hide-sidebar.svg'

const Sidebar = ({ boards }) => {
    useEffect(() => {
        console.log('>>> Boards [Sidebar main component]:', boards)
    }, [])

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