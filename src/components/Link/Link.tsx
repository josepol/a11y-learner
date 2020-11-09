import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AnimationMovement } from '../AnimationMovement/AnimationMovement';

const LinkContainer = styled(NavLink)`
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

const MinWidthContainer = styled.div`
    min-width: ${(props: IAnimationProps) => props.minWidth ? props.minWidth : 120}px;
    text-align: center;
`;

interface IProps {
    children: any;
    to: string;
    minWidth?: number;
}

interface IAnimationProps {
    minWidth?: number;
}

export function LinkNav(props: IProps) {
    return (
        <MinWidthContainer>
            <AnimationMovement>
                <LinkContainer activeClassName="selected" to={props.to}>{props.children}</LinkContainer>
            </AnimationMovement>
        </MinWidthContainer>
    );
}