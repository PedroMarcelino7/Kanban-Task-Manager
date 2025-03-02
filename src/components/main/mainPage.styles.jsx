import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

export const MainPageContainer = styled.div`
    background-color: var(--light-gray);
    height: 100%;
    width: 100%;
    padding: 1.5rem;
`

export const MainPageBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5rem;
`

export const MainPageEmptyBox = styled.div`
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
    font-weight: bold;

    &:hover {
        background-color: var(--main-purple-hover);
    }
`