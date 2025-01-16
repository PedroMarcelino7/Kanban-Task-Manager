import { styled } from 'styled-components'

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2.5rem;
    padding-block: 1.5rem;
    width: calc(100vw - 350px);
    height: 100px;
    border-bottom: 2px solid var(--light);
    background-color: var(--white);
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    color: var(--black);
`

export const ActionsBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const NewTaskButton = styled.button`
    color: var(--white);
    /* background-color: var(--main-purple-hover); */
    background-color: var(--main-purple);
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
`

export const Options = styled.img`
    padding: 1rem;
    cursor: pointer;
`