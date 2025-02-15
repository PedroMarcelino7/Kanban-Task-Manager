import styled from "styled-components"

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 
`

export const InputLabel = styled.label`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
`

export const TextArea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    min-height: 150px;
    max-height: 300px;
    padding: 0.75rem;
    border: 2px solid var(--light);
    border-radius: 5px;
    background-color: transparent;

    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    color: var(--black);
    
    outline: none;
    transition: all 0.3s;

    &::placeholder {
        color: var(--medium-gray);
        font-weight: normal;
    }

    &:focus {
        border-color: var(--main-purple);
    }
    
    &:active {
        border-color: var(--main-purple);
    }
`