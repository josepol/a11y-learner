import React from "react";
import { BoxStyle } from "./Style";

interface IProps {
    children: any;
}

export function Box(props: IProps) {
    return (
        <BoxStyle>{props.children}</BoxStyle>
    );
}
