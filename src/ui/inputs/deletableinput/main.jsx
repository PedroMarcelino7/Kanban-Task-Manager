// React
import React, { useEffect } from 'react'

// Styles
import { AddSubtaskInput, Input, InputBox, InputLabel, MappedInputs } from './deletableinput.styles'

// UI Components
import DefaultInputError from '../../labels/default_input_error/main';

// Components

// Images | Icons
import RemoveSubtask from '../../../assets/icon-cross.svg'

//
//
//
const DeletableInput = ({ label = '', data, dataValue, idReference, type = 'text', placeholder = '', onValueChange, hasColorInput, onColorChange, closeButton, error }) => {
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

            <MappedInputs>
                {data.map((item, index) => (
                    <AddSubtaskInput key={index}>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            value={item[dataValue]}
                            onChange={(e) => onValueChange(item[idReference], e.target.value)}
                            error={error}
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
                ))}
            </MappedInputs>

            {error && <DefaultInputError message={'Campo obrigatório!'} />}
        </InputBox>
    )
}

export default DeletableInput