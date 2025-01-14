import { LoadingBox, LoadingText } from "./loading.styles"

const Loading = ({ height, text }) => {
    return (
        <LoadingBox height={height}>
            <LoadingText>
                {text}
            </LoadingText>
        </LoadingBox>
    )
}

export default Loading