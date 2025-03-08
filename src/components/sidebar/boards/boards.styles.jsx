import { styled } from 'styled-components'

export const BoardsBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const BoardsNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

export const Board = styled.div`
    display: flex;
    align-items: center;
    padding-block: 0.75rem;
    padding-left: 2.5rem;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    gap: 1rem;
    transform: translateX(-2.5rem);
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        background-color: var(--main-purple-hover);

        h2 {
            color: #fff;
        }
    }
    
    &.selected {
        background-color: var(--main-purple);
        
        h2 {
            color: #fff;
        }
    }

    img {
        width: 20px;
        height: 20px;
    }
`

export const BoardName = styled.h2`
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: var(--medium-gray);

    &.new-board {
        color: var(--main-purple)
    }
`

export const Title = styled.h1`
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 2.5px;
    color: var(--medium-gray);
    margin-bottom: 1rem;
`

export const HideSidebar = styled.div`
    display: flex;

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;

        img {
            width: 15px;
            height: 15px;
        }

        h3 {
            font-size: 18px;
            font-weight: bold;
            line-height: 23px;
            color: var(--medium-gray);
        }
    }
`