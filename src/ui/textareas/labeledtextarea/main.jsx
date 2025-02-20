import DefaultInputError from "../../labels/default_input_error/main"
import { InputBox, InputLabel, TextArea } from "./labeledtextarea.styles"

const LabeledTextArea = ({ label = '', placeholder, max = 3, name, error }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <TextArea
                placeholder={placeholder} max={max}
                {...name}
            />
            <DefaultInputError message={error} />
        </InputBox>
    )
}

export default LabeledTextArea