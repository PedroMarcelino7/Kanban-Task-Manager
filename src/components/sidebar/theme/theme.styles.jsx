import styled from "styled-components"

export const ThemeBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding-block: 1rem;
    gap: 1.5rem;
    background-color: var(--light-gray);
`

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 21px;

    input:checked + span {
        background-color: var(--main-purple);
    }

    input:checked + span:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;  
    }
`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--medium-gray);
    transition: .4s;
    
    &:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 3px;
        bottom: 3px;
        background-color: var(--white);
        transition: .4s;
    }

    &.round {
        border-radius: 15px;

        &:before {
            border-radius: 50%;
        }
    }
`