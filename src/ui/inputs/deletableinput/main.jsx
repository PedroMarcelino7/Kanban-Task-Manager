import React from 'react'
import RemoveSubtask from '../../../assets/icon-cross.svg'
import { AddSubtaskInput, Input, InputBox, InputLabel } from './deletableinput.styles'

const DeletableInput = ({ label = '', data, type = 'text', placeholder = '', onValueChange, hasColorInput = false, onColorChange, closeButton }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>

            <div>
                {data.map((item, index) => (
                    <AddSubtaskInput key={index}>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            value={item.value}
                            onChange={(e) => onValueChange(item.id, e.target.value)}
                        />

                        {hasColorInput &&
                            <Input type="color"
                                value={item.color}
                                onChange={(e) => onColorChange(item.id, e.target.value)}
                            />
                        }

                        <img src={RemoveSubtask} alt="" onClick={() => closeButton(item.id)} />
                    </AddSubtaskInput>
                ))}
            </div>
        </InputBox>
    )
}

export default DeletableInput