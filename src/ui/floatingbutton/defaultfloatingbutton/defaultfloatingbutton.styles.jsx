import styled from 'styled-components';

export const Container = styled.div`
    position: fixed; /* Melhor do que absolute para botões flutuantes */
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    width: 60px;
    height: 60px;
    background-color: var(--main-purple);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`;
