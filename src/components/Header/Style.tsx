import styled from "styled-components";

export const NavStyle = styled.nav`
    background-color: ${({ theme }) => theme.backgroundWhite};
    height: 70px;
    padding: 0px 20px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    display: flex;
    justify-content: left;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
`;

export const AlternativeColorStyle = styled.span`
    color: ${({ theme }) => theme.primaryColor};
`;

export const DesktopStyle = styled.div`
    display: block;
    @media screen and (max-width: ${props => props.theme.breakPoints[0]}) {
        display: none;
    }
`;

export const MobileStyle = styled.div`
    display: none;
    @media screen and (max-width: ${props => props.theme.breakPoints[0]}) {
        display: block;
    }
`;
