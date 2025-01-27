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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

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

export const AddNewColumnButton = styled.button`
    color: var(--main-purple);
    font-weight: bold;
    background-color: #e4ebfa;
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
`

export const CreateTaskButton = styled.button`
    width: 100%;
    color: #fff;
    background-color: var(--main-purple);
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
    margin-top: -10px;
`