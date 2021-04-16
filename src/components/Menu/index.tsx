import React from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuStyle } from './Style';
import { Flex } from 'components/Flex';
import { Link } from 'components/Link';
import { Button } from 'components/Button';

export default function Menu() {

  const login = () => {
    // login
  }

  return (
    <Flex justifyContent='flex-end' flexDirection='column' role="region">
      <MenuStyle>
        <Link to="/" minWidth={120}>Theory</Link>
        <Link to="/">Examples</Link>
        <Link to="/">Exercises</Link>
        <Flex justifyContent='flex-end'>
          <Button btnText="Log In" icon={faSignInAlt} onClick={() => login()} />
        </Flex>
      </MenuStyle>
    </Flex>
  );
}