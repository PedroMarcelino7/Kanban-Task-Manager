import React from 'react'
import { ThemeBox, Switch, Slider } from './theme.styles'
import Sun from '../../../assets/icon-light-theme.svg'
import Moon from '../../../assets/icon-dark-theme.svg'
import { useTheme } from '../../../contexts/ThemeContext'

const Theme = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <ThemeBox>
            <img src={Sun} alt="" />

            <Switch>
                <input type="checkbox" onClick={toggleTheme} />
                <Slider className='round' />
            </Switch>

            <img src={Moon} alt="" />
        </ThemeBox>
    )
}

export default Theme