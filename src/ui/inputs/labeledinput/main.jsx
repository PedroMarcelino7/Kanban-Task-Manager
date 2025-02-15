import { Input, InputBox, InputLabel } from "./labeledinput.styles"

const LabeledInput = ({ label = '', type = 'text', placeholder = '', name, error }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                {...name}
            />
            <h1>{error}</h1>
        </InputBox>
    )
}

export default LabeledInput