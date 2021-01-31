import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HoverAnimation } from '../HoverAnimation';
import { ButtonStyle, IconStyle } from './Style';

interface IProps {
    btnText?: string;
    icon?: IconProp;
    onClick: Function;
    ariaLabel?: string;
}

export function Button(props: IProps) {
  return (
    <HoverAnimation time={0.3} up={2}>
      <ButtonStyle onClick={(event: React.MouseEvent) => props.onClick(event)}
        aria-label={props.ariaLabel ? props.ariaLabel : props.btnText}>
        {props.icon && <IconStyle icon={props.icon} />}
        {props.btnText && <span>{props.btnText}</span>}
      </ButtonStyle>
    </HoverAnimation>
  );
}
