import React from "react";
import styled from "styled-components";

interface IProps {
    children: any;
}

const BoxContainer = styled.div`
    width: 200px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundWhite};
    padding: 0px 20px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
    &:hover {
        color: ${({ theme }) => theme.primaryColor};
    }
`;

export function Box(props: IProps) {
    return (
        <BoxContainer>{props.children}</BoxContainer>
    );
}
