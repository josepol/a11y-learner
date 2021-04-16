import React from 'react';
import { HoverAnimationStyle } from './Style';

export interface IProps {
    children: any;
    time?: number;
    up?: number;
}

export function HoverAnimation(props: IProps) {
  return (
    <HoverAnimationStyle up={props.up} time={props.time}>{props.children}</HoverAnimationStyle>
  );
}