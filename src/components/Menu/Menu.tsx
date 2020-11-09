import React from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex/Flex';
import { LinkNav } from '../Link/Link';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button';

const MenuContainer = styled.div`
    position: absolute;
    background: white;
    top: 70px;
    width: 100%;
    right: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
    padding: 10px;
`;

export function Menu() {
    return (
            <Flex justifyContent='flex-end' flexDirection='column'>
                <MenuContainer><LinkNav to="/" minWidth={120}>Theory</LinkNav>
                <LinkNav to="/">Examples</LinkNav>
                <LinkNav to="/">Exercises</LinkNav>
                <Button btnText="Log In" icon={faSignInAlt} onClick={() => {}} /></MenuContainer>
            </Flex>
    );
}