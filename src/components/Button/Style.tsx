import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonStyle = styled.button`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizeSmall};
    background-color: ${({ theme }) => theme.primaryColor};
    border: none;
    color: ${({ theme }) => theme.backgroundWhite};
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    span {
        margin-left: 10px;
    }
    &:hover {
        background-color: ${({ theme }) => theme.primaryColorDark};
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