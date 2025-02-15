import { InputBox, InputLabel, TextArea } from "./labeledtextarea.styles"

const LabeledTextArea = ({ label = '', placeholder, max = 3, inputValue, onValueChange }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <TextArea
                placeholder={placeholder} max={max}
                value={inputValue} onChange={(e) => onValueChange(e.target.value)}
            />
        </InputBox>
    )
}

export default LabeledTextArea