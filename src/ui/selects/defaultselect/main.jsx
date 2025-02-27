import React, { useEffect } from 'react'
import { InputBox, InputLabel, StatusBox, StatusOption, StatusSelect } from './defaultselect.styles'

import SelectIcon from '../../../assets/icon-chevron-down.svg'

const DefaultSelect = ({ label = '', onValueChange, data, dataValue, dataOption }) => {
    useEffect(() => {
        console.log('>>> Data Value [Default Select UI Component]:', dataValue)
        console.log('>>> Data Option [Default Select UI Component]:', dataOption)
    }, [])

    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>

            <StatusBox>
                <img src={SelectIcon} alt="" />

                <StatusSelect onChange={(e) => onValueChange(e.target.value)}>
                    {data.map((item, index) => (
                        <StatusOption
                            key={index}
                            value={item[dataValue]}
                        >
                            {item[dataOption]}
                        </StatusOption>
                    ))}
                </StatusSelect>
            </StatusBox>
        </InputBox>
    )
}

export default DefaultSelect