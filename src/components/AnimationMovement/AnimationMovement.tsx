import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = (up: number) => keyframes`
  to {
    transform: translateY(-${up}px);
  }
`;

const AnimationMove = styled.div`
    &:hover {
        animation: ${(props: IProps) => rotate(props.up ? props.up : 2)}
        ${(props: IProps) => props.time ? props.time : 0.3}s ease 1 forwards;
    }
`;

interface IProps {
    children: any;
    time?: number;
    up?: number;
}

export function AnimationMovement(props: IProps) {
    return (
        <AnimationMove>{props.children}</AnimationMove>
    );
}