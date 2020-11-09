import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex } from '../Flex/Flex';
import { LinkNav } from '../Link/Link';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button';

const animation = () => keyframes`
    from {
        opacity: 0;
    },
    to {
        opacity: 1;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
    background: white;
    top: 70px;
    width: 100%;
    right: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
    padding: 20px;
    animation: ${animation()} 0.5s;
`;

const MobileLoginContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Menu() {
    return (
        <Flex justifyContent='flex-end' flexDirection='column' role="region">
            <MenuContainer>
                <LinkNav to="/" minWidth={120}>Theory</LinkNav>
                <LinkNav to="/">Examples</LinkNav>
                <LinkNav to="/">Exercises</LinkNav>
                <MobileLoginContainer>
                    <Button btnText="Log In" icon={faSignInAlt} onClick={() => {}} />
                </MobileLoginContainer>
            </MenuContainer>
        </Flex>
    );
}