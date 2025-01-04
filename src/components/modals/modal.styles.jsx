import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalBox = styled.div`
    background-color: var(--white);
    width: 500px;
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
