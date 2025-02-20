import { Error } from "./default_input_error.styles"

const DefaultInputError = ({ message }) => {
    return (
        <Error>{message}</Error>
    )
}

export default DefaultInputError