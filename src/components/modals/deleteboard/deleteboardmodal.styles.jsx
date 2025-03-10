import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: var(--black);
`

export const Subtitle = styled.h2`
    font-size: 13px;
    font-weight: normal;
    line-height: 23px;
    color: var(--medium-gray);
`

export const ButtonsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
`