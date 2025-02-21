import DefaultInputError from "../../labels/default_input_error/main"
import { Input, InputBox, InputLabel } from "./labeledinput.styles"

const LabeledInput = ({ label = '', type = 'text', placeholder = '', value, onValueChange }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </InputBox>
    )
}

export default LabeledInput