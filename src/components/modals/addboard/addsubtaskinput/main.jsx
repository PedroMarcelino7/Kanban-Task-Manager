import React from 'react'
import { AddSubtaskInput, Input } from './addsubtaskinput.styles'
import RemoveSubtask from '../../../../assets/icon-cross.svg'

const AddSubtaskInputComponent = () => {
    return (
        <AddSubtaskInput>
            <Input type='text' placeholder='e.g. Todo' />
            <Input type="color" name="" id="" />
            <img src={RemoveSubtask} alt="" />
        </AddSubtaskInput>
    )
}

export default AddSubtaskInputComponent