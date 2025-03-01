import styled from "styled-components";

export const DefaultButtonStyle = styled.button`
    width: 100%;
    color: ${({ color }) => color || 'var(--white)'};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
    background-color: ${({ disabled, background }) => (disabled ? 'var(--main-purple-hover)' : background || 'var(--main-purple)')};
    border-radius: 25px;
    border: none;
    padding-block: 0.75rem;
    padding-inline: 1.25rem;
    cursor: pointer;
    margin-top: ${({ negativemargin }) => (negativemargin ? '-10px' : '0')};
`;
