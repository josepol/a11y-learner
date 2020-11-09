import React from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { AnimationMovement } from '../../components/AnimationMovement/AnimationMovement';
import { Heading } from '../../components/Heading/Heading';

export function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <Main>
                <AnimationMovement><Heading text="Theory" /></AnimationMovement>
                <div>asdasd</div>
                <div>asdasd</div><div>asdasd</div>
            </Main>
        </React.Fragment>
    );
}
