import DefaultInputError from "../../labels/default_input_error/main"
import { InputBox, InputLabel, TextArea } from "./labeledtextarea.styles"

const LabeledTextArea = ({ label = '', placeholder, max = 3, value, onValueChange }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <TextArea
                placeholder={placeholder} max={max}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </InputBox>
    )
}

export default LabeledTextArea