import styled from 'styled-components'

export const HideSidebar = styled.div`
    display: flex;
    justify-content: ${({ position }) => position === 'end' ? 'end' : 'start'};
    margin-top: ${({ marginTop }) => marginTop ? '10px' : ''};
    
    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;

        img {
            width: ${({ size }) => size === 'small' ? '12px' : '15px'};
            height: ${({ size }) => size === 'small' ? '12px' : '15px'};
        }

        h3 {
            font-size: ${({ size }) => size === 'small' ? '15px' : '18px'}; 
            font-weight: bold;
            line-height: 23px;
            color: var(--medium-gray);
        }
    }
`