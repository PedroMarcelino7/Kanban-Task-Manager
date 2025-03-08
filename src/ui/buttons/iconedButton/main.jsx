import React from 'react'
import { HideSidebar } from './iconedButton.styles'

const IconedButton = ({ label, icon, position, marginTop, size, onClick }) => {
    return (
        <HideSidebar
            position={position}
            marginTop={marginTop}
            size={size}
            onClick={onClick}
        >
            <div>
                <img src={icon} alt="" />
                <h3>{label}</h3>
            </div>
        </HideSidebar>
    )
}

export default IconedButton