import styled from 'styled-components'

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

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--light);
    border-radius: 5px;
    background-color: transparent;
    
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
    color: var(--black);
    
    outline: none;
    transition: all 0.5s;
    
    &::placeholder {
        color: var(--medium-gray);
        font-weight: normal;
    }
`

export const Error = styled.h6`
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
    color: var(--red);
    margin-top: -5px;
`