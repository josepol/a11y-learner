import styled, { keyframes } from 'styled-components';

const animation = () => keyframes`
    from {
        opacity: 0;
    },
    to {
        opacity: 1;
    }
`;

export const MenuStyle = styled.div`
    position: absolute;
    background: white;
    top: 70px;
    width: 100%;
    right: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
    padding: 20px;
    animation: ${animation()} 0.5s;
`;
