import React from "react";
import styled from "styled-components";

interface IProps {
    text: string;
}

const HeadingContainer = styled.h1`
    font-size: ${({ theme }) => theme.fontSizeTitleH1};
    color: ${({ theme }) => theme.fontColor};
    &:hover {
        color: ${({ theme }) => theme.primaryColor};
    }
`;

export function Heading(props: IProps) {
    return (
        <HeadingContainer>{props.text}</HeadingContainer>
    );
}
