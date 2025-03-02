import { Input, InputBox, InputLabel } from "./labeledinput.styles"

import DefaultInputError from "../../labels/default_input_error/main"

const LabeledInput = ({ label = '', type = 'text', placeholder = '', value, onValueChange, error }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                error={error}
            />

            {error && <DefaultInputError message={'Campo obrigatório!'} />}
        </InputBox>
    )
}

export default LabeledInput