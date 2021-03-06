import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AnimationMovement } from '../AnimationMovement/AnimationMovement';

const Btn = styled.button`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    background-color: ${({ theme }) => theme.primaryColor};
    border: none;
    color: ${({ theme }) => theme.backgroundWhite};
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    span {
        margin-left: 10px;
    }
    &:hover {
        background-color: ${({ theme }) => theme.primaryColorDark};
    }
    @media (max-width: ${({ theme }) => theme.breakPoints[0]}) {
        span {
            display: none;
        }
    }
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0px;
`;

interface IProps {
    btnText?: string;
    icon?: IconProp;
    onClick: Function;
    ariaLabel?: string;
}

export function Button(props: IProps) {
    return (
        <AnimationMovement time={0.3} up={2}>
            <Btn onClick={(event: React.MouseEvent) => props.onClick(event)}
                aria-label={props.ariaLabel ? props.ariaLabel : props.btnText}>
                {props.icon && <Icon icon={props.icon} />}
                {props.btnText && <span>{props.btnText}</span>}
            </Btn>
        </AnimationMovement>
    );
}
