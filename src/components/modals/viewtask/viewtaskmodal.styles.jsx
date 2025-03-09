import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: var(--black);
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
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.5s;

    &.show {
        opacity: 1;
        transform: scaleY(1);
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

export const Subtitle = styled.h2`
    font-size: 13px;
    font-weight: normal;
    line-height: 23px;
    color: var(--medium-gray);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`
