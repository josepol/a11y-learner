import React from 'react';
import { MainStyle } from './Style';

interface IProps {
    children: any;
}

export function Main(props: IProps) {
  return (
    <MainStyle>{props.children}</MainStyle>
  );
}
