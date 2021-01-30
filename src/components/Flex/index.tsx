import React from 'react';
import { FlexStyle } from './Style';

export interface IProps {
    children: any;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    role?: string;
    wrap?: string;
    className?: any;
}

export function Flex(props: IProps) {
    return (
        <FlexStyle
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
            role={props.role}
            wrap={props.wrap}
            flexDirection={props.flexDirection}
        >
            {props.children}
        </FlexStyle>
    );
}