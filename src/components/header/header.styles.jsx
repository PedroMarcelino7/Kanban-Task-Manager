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
    background-color: ${({ disabled }) => (disabled ? 'var(--main-purple-hover)' : 'var(--main-purple)')};
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
`

export const OptionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Options = styled.img`
    padding: 1rem;
    cursor: pointer;
`

export const OptionsPopUp = styled.div`
    width: 200px;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px -2px 1px var(--light);
    position: absolute;
    top: 3.75rem;
    right: 0;
    display: flex;
    flex-direction: column;
    transform: translateX(500px);
    transition: all 2s;
    z-index: 1000;
    
    &.show {
        transition: all 0.5s;
        transform: translateX(0);
    }
`

export const Option = styled.button`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    background-color: transparent;
    text-align: start;

    &.delete{
        color: red;
    }
`
