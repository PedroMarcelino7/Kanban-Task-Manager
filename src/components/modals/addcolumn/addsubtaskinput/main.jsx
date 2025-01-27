import React from 'react'
import { AddSubtaskInput, Input } from './addsubtaskinput.styles'
import RemoveSubtask from '../../../../assets/icon-cross.svg'

const AddSubtaskInputComponent = ({ value, color, id, onValueChange, onColorChange, deleteColumn }) => {
    return (
        <AddSubtaskInput>
            <Input type='text' placeholder='e.g. Todo' value={value} onChange={(e) => onValueChange(id, e.target.value)} />
            <Input type="color" value={color} onChange={(e) => onColorChange(id, e.target.value)} />
            <img src={RemoveSubtask} alt="" onClick={() => deleteColumn(id)} />
        </AddSubtaskInput>
    )
}

export default AddSubtaskInputComponent