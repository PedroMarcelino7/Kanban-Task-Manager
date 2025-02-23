import { DefaultButtonStyle } from "./defaultButton.styles"

const DefaultButton = ({ label, type = 'button', onClick, color, background, fontWeight, negativeMargin, disabled }) => {
    return (
        <DefaultButtonStyle
            type={type}
            onClick={onClick}
            color={color}
            background={background}
            fontWeight={fontWeight}
            negativeMargin={negativeMargin}
            disabled={disabled}
        >
            {label}
        </DefaultButtonStyle>
    )
}

export default DefaultButton