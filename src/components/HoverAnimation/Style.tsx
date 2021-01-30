import styled, { keyframes } from 'styled-components';
import { IProps } from '.';

const rotate = (up: number) => keyframes`
  to {
    transform: translateY(-${up}px);
  }
`;

export const HoverAnimationStyle = styled.div`
    &:hover {
        animation: ${(props: IProps) => rotate(props.up ? props.up : 2)}
        ${(props: IProps) => props.time ? props.time : 0.3}s ease 1 forwards;
    }
`;
