import styled from 'styled-components';

export const ModalStyle = styled.div`
    position: absolute;
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ModalContentStyle = styled.div`
    width: 40%;
    height: 200px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundWhite};
    padding: 0px 20px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0,0,0,0.05), 0 3px 6px rgba(0,0,0,0.05);
    @media screen and (max-width: ${props => props.theme.breakPoints[0]}) {
        width: 70%;
    }
`;