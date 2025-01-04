import styled from 'styled-components'

export const MainPageBox = styled.div`
    background-color: var(--light);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: var(--medium-gray);
`

export const NewColumnButton = styled.button`
    color: var(--white);
    background-color: var(--main-purple);
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color: var(--main-purple-hover);
    }
`