import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 1.75rem;
    left: 1.75rem;
    min-width: 250px;
`

export const Box = styled.div`
    width: 100%;
    background-color: rgba(50, 200, 50, 1);
    border-radius: 10px;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    padding-inline: 1rem;
    position: relative;
    overflow: hidden;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: var(--black);
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
    width: ${({ timer }) => `${timer}%`};
    height: 100%;
    background-color: rgba(0, 125, 0, 1);
    transition: all 0.5s;
`