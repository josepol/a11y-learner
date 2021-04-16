import React from 'react';
import { ModalStyle, ModalContentStyle } from './Style';

interface IProps {
    children?: any;
    isModalOpen?: boolean;
    modalChildren?: any;
}

export function Modal(props: IProps) {
  if (props.isModalOpen) {
    return (
      <React.Fragment>
        <ModalStyle>
          <ModalContentStyle>
            {props.modalChildren}
          </ModalContentStyle>
        </ModalStyle>
        {props.children}
      </React.Fragment>
    );
  } else {
    return props.children
  }
}
