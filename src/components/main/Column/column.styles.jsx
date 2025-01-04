import styled from "styled-components";

export const ColumnBox = styled.div`
    width: 350px;
`

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
`

export const IdentificationColor = styled.div`
    width: 15px;
    height: 15px;
    background-color: #000;
    border-radius: 50%;
`

export const Title = styled.h1`
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 2.5px;
    color: var(--medium-gray);
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`