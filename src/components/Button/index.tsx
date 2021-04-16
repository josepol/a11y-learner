import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ButtonStyle, IconStyle } from './Style';
import { HoverAnimation } from 'components/HoverAnimation';

export interface IProps {
  primary?: boolean;
  btnText?: string;
  icon?: IconProp;
  onClick: Function;
  ariaLabel?: string;
  theme?: any;
}

export function Button(props: IProps) {
  return (
    <HoverAnimation time={0.3} up={2}>
      <ButtonStyle primary={props.primary} onClick={(event: React.MouseEvent) => props.onClick(event)}
        aria-label={props.ariaLabel ? props.ariaLabel : props.btnText}>
        {props.icon && <IconStyle icon={props.icon} />}
        {props.btnText && <span>{props.btnText}</span>}
      </ButtonStyle>
    </HoverAnimation>
  );
}