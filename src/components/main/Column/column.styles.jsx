import styled from "styled-components";

export const ColumnBox = styled.div`
    width: 350px;
`

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    gap: 0.75rem;
`

export const TitleDivider = styled.div`
    display: flex;
`

export const ActionsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const Action = styled.img`
    width: 1rem;
`

export const IdentificationColor = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${({ color }) => color || 'var(--black)'};
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