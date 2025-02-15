import { Input, InputBox, InputLabel } from "./labeledinput.styles"


const LabeledInput = ({ label = '', type = 'text', placeholder = '', inputValue, onValueChange }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <Input
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </InputBox>
    )
}

export default LabeledInput