import { styled } from 'styled-components'

export const SidebarContainer = styled.div`
    padding-inline: 2.5rem;
    padding-bottom: 3rem;
    width: 25%;
    height: 100vh;
    background-color: var(--white);
    border-right: 2px solid var(--light);
    display: flex;
    flex-direction: column;
`

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    height: 8.5rem;
`

export const HideSidebar = styled.div`
    display: flex;
    margin-top: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        h3 {
        font-size: 18px;
        font-weight: bold;
        line-height: 23px;
        color: var(--medium-gray);
    }
    }
`