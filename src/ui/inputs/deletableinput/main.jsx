// React
import React, { useEffect } from 'react'

// Styles
import { AddSubtaskInput, Input, InputBox, InputLabel, MappedDiv } from './deletableinput.styles'

// UI Components
import DefaultInputError from '../../labels/default_input_error/main';

// Components

// Images | Icons
import RemoveSubtask from '../../../assets/icon-cross.svg'

//
//
//
const DeletableInput = ({ label = '', data, type = 'text', placeholder = '', onValueChange, hasColorInput, onColorChange, closeButton }) => {
    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Data [Deletable Input]:', data)
    }, [data])

    //
    //
    //
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>

            <div>
                {data.map((item, index) => (
                    <MappedDiv key={index}>
                        <AddSubtaskInput>
                            <Input
                                type={type}
                                placeholder={placeholder}
                                value={item.value}
                                onChange={(e) => onValueChange(item.id, e.target.value)}
                            />

                            {hasColorInput &&
                                <Input
                                    type="color"
                                    value={item.color}
                                    onChange={(e) => onColorChange(item.id, e.target.value)}
                                />
                            }

                            <img src={RemoveSubtask} alt="" onClick={() => closeButton(item.id)} />
                        </AddSubtaskInput>
                    </MappedDiv>
                ))}
            </div>
        </InputBox>
    )
}

export default DeletableInput