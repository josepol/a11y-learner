import React from 'react';
import { InputLabelStyle, InputElementStyle } from './Style';
import { Flex } from 'components/Flex';

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