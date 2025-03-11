import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: 1.75rem;
    left: 1.75rem;
    min-width: 250px;
`

export const Box = styled.div`
    width: 100%;
    background-color: rgba(50, 200, 50, 0.75);
    border-radius: 10px;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    position: relative;
    overflow: hidden;
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

export const CloseButton = styled.img`
    cursor: pointer;
    padding: 0.15rem;
`

export const TimerBackground = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.35);
`

export const Timer = styled.div`
    width: 75%;
    height: 100%;
    background-color: red;
`