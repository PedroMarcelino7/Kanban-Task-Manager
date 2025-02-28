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

export const SectionTitle = styled.h4`
    font-size: 15px;
    font-weight: bold;
    line-height: 19px;
    color: var(--medium-gray);
    margin-bottom: 0.5rem;
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
    background-color: var(--white);
    color: var(--black);

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
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
`
