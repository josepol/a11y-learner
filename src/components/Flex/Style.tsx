import styled from 'styled-components';
import { IProps } from '.';

export const FlexStyle = styled.div`
    display: flex;
    justify-content: ${(props: IProps) => props.justifyContent ? props.justifyContent : 'space-between'};
    align-items: ${(props: IProps) => props.alignItems ? props.alignItems : 'center'};
    width: 100%;
    flex-direction: ${(props: IProps) => props.flexDirection ? props.flexDirection : 'row'};
    flex-wrap: ${(props: IProps) => props.wrap ? props.wrap : 'no-wrap'};
`;
