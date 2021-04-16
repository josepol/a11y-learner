import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSizeTitle};
    vertical-align: super;
    color: ${({ theme }) => theme.fontColor};
    margin-right: ${({ theme }) => theme.spaces[1]};
    text-align: center;
    &:hover {
        color: ${({ theme }) => theme.primaryColor};
    }
    &.selected {
        color: ${({ theme }) => theme.primaryColor};
    }
`;

export const LinkStyle = styled.div`
    min-width: ${(props: any) => props.minWidth ? props.minWidth : 120}px;
    text-align: center;
`;