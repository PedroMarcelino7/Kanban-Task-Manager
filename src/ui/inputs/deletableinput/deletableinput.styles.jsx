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

export const AddSubtaskInput = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.5rem;

    img {
        width: 35px;
        padding: 0.5rem;

        cursor: pointer;
    }
`

export const Input = styled.input`
    border: 2px solid var(--light);
    border-radius: 5px;
    background-color: transparent;
    height: 45px;
    
    &[type="text"] {
        width: 100%;
        padding: 0.75rem;
        
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
    }
    
    &[type="color"]{
        padding: 0.25rem;
        width: 50px;
    }

    &:focus {
        border-color: var(--main-purple);
    }
    
    &:active {
        border-color: var(--main-purple);
    }
`