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
            <Error>{error}</Error>
        </InputBox>
    )
}

export default LabeledInput