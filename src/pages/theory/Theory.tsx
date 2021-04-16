import React from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { AnimationMovement } from '../../components/AnimationMovement/AnimationMovement';
import { Heading } from '../../components/Heading/Heading';
import { Box } from '../../components/Box/Box';
import { Flex } from '../../components/Flex/Flex';
import { LinkNav } from '../../components/Link/Link';
import styled from 'styled-components';

const MainContainer = styled.div`
    max-width: 950px;
    margin: auto;
`;

export function Theory() {
    return (
        <React.Fragment>
            <Header></Header>
            <Main>
                <Heading text="Theory" />
                <MainContainer>
                    <Flex justifyContent="space-around" wrap="wrap">
                        <AnimationMovement up={6}><LinkNav to="/theory/basic"><Box>Basic concepts</Box></LinkNav></AnimationMovement>
                        <AnimationMovement up={6}><LinkNav to="/theory/html"><Box>HTML</Box></LinkNav></AnimationMovement>
                        <AnimationMovement up={6}><LinkNav to="/theory/css-javascript"><Box>CSS & JavaScript</Box></LinkNav></AnimationMovement>
                        <AnimationMovement up={6}><LinkNav to="/theory/aria"><Box>ARIA</Box></LinkNav></AnimationMovement>
                        <AnimationMovement up={6}><LinkNav to="/theory/advance"><Box>Advance</Box></LinkNav></AnimationMovement>
                        <AnimationMovement up={6}><LinkNav to="/theory/plugins"><Box>Plugins</Box></LinkNav></AnimationMovement>
                    </Flex>
                </MainContainer>
            </Main>
        </React.Fragment>
    );
}
