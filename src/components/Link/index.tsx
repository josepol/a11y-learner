import React from 'react';
import { NavLinkStyle, LinkStyle } from './Style';
import { HoverAnimation } from 'components/HoverAnimation';

export interface IProps {
    children: any;
    to: string;
    minWidth?: number;
}

export function Link(props: IProps) {
  return (
    <LinkStyle>
      <HoverAnimation>
        <NavLinkStyle activeClassName="selected" to={props.to}>{props.children}</NavLinkStyle>
      </HoverAnimation>
    </LinkStyle>
  );
}