import React from 'react';
import { HeadingStyle } from './Style';

interface IProps {
    text: string;
}

export function Heading(props: IProps) {
  return (
    <HeadingStyle>{props.text}</HeadingStyle>
  );
}
