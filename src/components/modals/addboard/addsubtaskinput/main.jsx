import React from 'react'
import { AddSubtaskInput, Input } from './addsubtaskinput.styles'
import RemoveSubtask from '../../../../assets/icon-cross.svg'

const AddSubtaskInputComponent = ({ value, id, onChange }) => {
    return (
        <AddSubtaskInput>
            <Input type='text' placeholder='e.g. Todo' value={value} onChange={(e) => onChange(id, e.target.value)} />
            <Input type="color" name="" id="" />
            <img src={RemoveSubtask} alt="" />
        </AddSubtaskInput>
    )
}

export default AddSubtaskInputComponent