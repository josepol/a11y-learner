import React from "react";
import styled from "styled-components";

interface IProps {
    children: any;
}

const MainContainer = styled.main`
    padding: 0px 20px;
`;

export function Main(props: IProps) {
    return (
        <MainContainer>{props.children}</MainContainer>
    );
}
