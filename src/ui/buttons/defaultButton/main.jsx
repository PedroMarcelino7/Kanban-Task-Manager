import { DefaultButtonStyle } from "./defaultButton.styles"

const DefaultButton = ({ label, type = 'button', onClick, color, background, fontWeight, negativemargin, disabled }) => {
    return (
        <DefaultButtonStyle
            type={type}
            onClick={onClick}
            color={color}
            background={background}
            fontWeight={fontWeight}
            negativemargin={negativemargin}
            disabled={disabled}
        >
            {label}
        </DefaultButtonStyle>
    )
}

export default DefaultButton