import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: 1.75rem;
    left: 1.75rem;
`

export const Box = styled.div`
    width: 100%;
    background-color: rgba(50, 200, 50, 0.75);
    border-radius: 10px;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
`

export const Icon = styled.img`
    width: 1.5rem;
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: var(--black);
`