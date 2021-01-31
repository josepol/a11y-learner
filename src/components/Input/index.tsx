import React from 'react';
import { Flex } from '../Flex';
import { InputLabelStyle, InputElementStyle } from './Style';

interface IProps {
    labelText?: string;
}

export function Input(props: IProps) {
  return (
    <Flex justifyContent='center' flexDirection='column'>
      <InputLabelStyle>{props.labelText}</InputLabelStyle>
      <InputElementStyle></InputElementStyle>
    </Flex>
  );
}