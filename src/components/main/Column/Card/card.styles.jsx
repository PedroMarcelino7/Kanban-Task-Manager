import styled from "styled-components";

export const CardBox = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 10px;
    padding-block: 1.25rem;
    padding-inline: 1rem;
    box-shadow: 1px 1px 3px var(--light);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.025);
    }
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: var(--black);
`

export const Subtitle = styled.h2`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
`