import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${(props: IProps) => props.justifyContent ? props.justifyContent : 'space-between'};
    align-items: ${(props: IProps) => props.alignItems ? props.alignItems : 'center'};
    width: 100%;
    flex-direction: ${(props: IProps) => props.flexDirection ? props.flexDirection : 'row'};
    flex-wrap: ${(props: IProps) => props.wrap ? props.wrap : 'no-wrap'};
`;

interface IProps {
    children: any;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    role?: string;
    wrap?: string;
}

export function Flex(props: IProps) {
    return (
        <FlexContainer justifyContent={props.justifyContent} alignItems={props.alignItems} role={props.role} wrap={props.wrap}>
            {props.children}
        </FlexContainer>
    );
}