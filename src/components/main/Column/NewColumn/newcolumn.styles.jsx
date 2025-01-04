import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    color: var(--medium-gray);
`

export const NewColumnBox = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: var(--light);
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color: var(--medium-gray);
        
        ${Title} {
            color: var(--white);
        }
    }
`

