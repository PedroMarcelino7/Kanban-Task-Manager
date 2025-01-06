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

    &:focus {
        border-color: var(--main-purple);
    }
    
    &:active {
        border-color: var(--main-purple);
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--light);
    border-radius: 5px;

    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    color: var(--black);

    outline: none;
    transition: all 0.5s;

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

export const SectionTitle = styled.h4`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
    margin-bottom: 0.5rem;
`

export const StatusBox = styled.div`
    position: relative;

    img {
        width: 15px;
        height: 10px;
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        pointer-events: none;
    }
`

export const StatusSelect = styled.select`
    width: 100%;
    display: flex;
    padding: 0.75rem;
    border: 2px solid var(--light);
    border-radius: 5px;

    font-size: 15px;
    font-weight: bold;
    line-height: 19px;

    appearance: none;
    outline: none;
    transition: all 0.5s;
    cursor: pointer;

    &:focus {
        border-color: var(--main-purple);
    }
    
    &:active {
        border-color: var(--main-purple);
    }
`;

export const StatusOption = styled.option`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
`