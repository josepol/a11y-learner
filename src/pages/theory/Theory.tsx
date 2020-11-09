import React from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { AnimationMovement } from '../../components/AnimationMovement/AnimationMovement';
import { Heading } from '../../components/Heading/Heading';
import { Box } from '../../components/Box/Box';
import { Flex } from '../../components/Flex/Flex';
import { LinkNav } from '../../components/Link/Link';

export function Theory() {
    return (
        <React.Fragment>
            <Header></Header>
            <Main>
                <Heading text="Theory" />
                <Flex justifyContent="space-around" wrap="wrap">
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>Basic concepts</Box></LinkNav></AnimationMovement>
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>HTML</Box></LinkNav></AnimationMovement>
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>CSS & JavaScript</Box></LinkNav></AnimationMovement>
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>ARIA Labels</Box></LinkNav></AnimationMovement>
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>Advance</Box></LinkNav></AnimationMovement>
                    <AnimationMovement up={6}><LinkNav to="/examples"><Box>Plugins</Box></LinkNav></AnimationMovement>
                </Flex>
            </Main>
        </React.Fragment>
    );
}
