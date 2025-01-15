import styled from "styled-components";

export const LoadingBox = styled.div`
    width: 100%;
    height: ${({ height }) => height || '100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-gray)
`

export const LoadingText = styled.h1`
    color: var(--black);
`
