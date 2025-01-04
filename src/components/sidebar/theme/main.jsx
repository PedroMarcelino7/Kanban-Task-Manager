import React from 'react'
import { ThemeBox, Switch, Slider } from './theme.styles'
import Sun from '../../../assets/icon-light-theme.svg'
import Moon from '../../../assets/icon-dark-theme.svg'

const Theme = () => {
    return (
        <ThemeBox>
            <img src={Sun} alt="" />

            <Switch>
                <input type="checkbox" />
                <Slider className='round' />
            </Switch>

            <img src={Moon} alt="" />
        </ThemeBox>
    )
}

export default Theme