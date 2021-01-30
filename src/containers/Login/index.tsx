import React from 'react';
import { Input } from '../../components/Input';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import './Login.css';

export function Login() {
    return (
        <Flex className='heigh-100' flexDirection="column" justifyContent="space-evenly">
            <Input labelText={'Username'}></Input>
            <Button btnText="Log In" icon={faSignInAlt} onClick={() => {}} />
        </Flex>
    );
}