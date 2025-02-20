import DefaultInputError from "../../labels/default_input_error/main"
import { Error, Input, InputBox, InputLabel } from "./labeledinput.styles"

const LabeledInput = ({ label = '', type = 'text', placeholder = '', name, error }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                {...name}
            />
            <DefaultInputError message={error} />
        </InputBox>
    )
}

export default LabeledInput