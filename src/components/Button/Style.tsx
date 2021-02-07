import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProps } from '.';

export const ButtonStyle = styled.button`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    background-color: ${(props: IProps) => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
    border: ${(props: IProps) => 'solid 1px' + props.primary ? props.theme.primaryColorDark : props.theme.secondaryColor};
    color: ${(props: IProps) => props.theme.backgroundWhite};
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    span {
        margin-left: 10px;
    }
    &:hover {
        background-color: ${(props: IProps) => props.primary ? props.theme.primaryColorDark : props.theme.secondaryColorDark};
    }
    @media (max-width: ${({ theme }) => theme.breakPoints[0]}) {
        span {
            display: none;
        }
    }
`;

export const IconStyle = styled(FontAwesomeIcon)`
    margin-right: 0px;
`;