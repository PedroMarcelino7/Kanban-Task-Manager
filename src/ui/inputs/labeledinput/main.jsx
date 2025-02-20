import DefaultInputError from "../../labels/default_input_error/main"
import { Input, InputBox, InputLabel } from "./labeledinput.styles"

const LabeledInput = ({ label = '', type = 'text', placeholder = '', name, error, value, onValueChange }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                {...name}
            />
            <DefaultInputError message={error} />
        </InputBox>
    )
}

export default LabeledInput