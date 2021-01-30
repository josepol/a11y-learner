import React from 'react';
import { Flex } from '../Flex';
import { Link } from '../Link';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import { MenuStyle } from './Style';

export default function Menu() {
    return (
        <Flex justifyContent='flex-end' flexDirection='column' role="region">
            <MenuStyle>
                <Link to="/" minWidth={120}>Theory</Link>
                <Link to="/">Examples</Link>
                <Link to="/">Exercises</Link>
                <Flex justifyContent='flex-end'>
                    <Button btnText="Log In" icon={faSignInAlt} onClick={() => {}} />
                </Flex>
            </MenuStyle>
        </Flex>
    );
}