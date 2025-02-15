import { InputBox, InputLabel, TextArea } from "./labeledtextarea.styles"

const LabeledTextArea = ({ label = '', placeholder, max = 3, name, error }) => {
    return (
        <InputBox>
            <InputLabel>{label}</InputLabel>
            <TextArea
                placeholder={placeholder} max={max}
                {...name}
            />
            <h1>{error}</h1>
        </InputBox>
    )
}

export default LabeledTextArea