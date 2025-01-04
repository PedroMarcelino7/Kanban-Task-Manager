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

export const Options = styled.img`
    padding: 1rem;
    cursor: pointer;
`

export const Subtitle = styled.h2`
    font-size: 13px;
    font-weight: normal;
    line-height: 23px;
    color: var(--medium-gray);
`

export const SubtasksCount = styled.h4`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
    margin-bottom: 1.25rem;
`

export const SubtasksBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    `

export const Subtask = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--light-gray);
    padding: 1rem;
    border-radius: 10px;
`

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    appearance: none;
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    border: 2px solid var(--light);
    background-color: var(--white);
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    transition: all 0.5s;
  
    &:checked {
        background-color: #635fc7;
        border: none;
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid var(--white);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export const SubtaskTitle = styled.h3`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--black);
    
    &.checked {
        color: var(--medium-gray);
    }
`