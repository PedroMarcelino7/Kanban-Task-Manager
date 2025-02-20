// React
import React, { useEffect } from 'react'

// Form Validation
import * as yup from "yup"

// Styles
import { AddSubtaskInput, Input, InputBox, InputLabel, MappedDiv } from './deletableinput.styles'

// UI Components
import DefaultInputError from '../../labels/default_input_error/main';

// Components

// Images | Icons
import RemoveSubtask from '../../../assets/icon-cross.svg'

//---

//YUP Schema
const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
}).required();

//
//
//
const DeletableInput = ({ label = '', data, type = 'text', placeholder = '', register, errors, hasColorInput, onColorChange, closeButton }) => {
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
                    <MappedDiv>
                        <AddSubtaskInput key={index}>
                            <Input
                                type={type}
                                placeholder={placeholder}
                                // {...register(`columns.${index}.value`)}
                            />

                            {hasColorInput &&
                                <Input type="color"
                                    value={item.color}
                                    onChange={(e) => onColorChange(item.id, e.target.value)}
                                />
                            }

                            <img src={RemoveSubtask} alt="" onClick={() => closeButton(item.id)} />
                        </AddSubtaskInput>
                        {errors?.columns?.[index]?.value && <DefaultInputError message={errors.columns[index].value.message} />}
                    </MappedDiv>
                ))}
            </div>
        </InputBox>
    )
}

export default DeletableInput