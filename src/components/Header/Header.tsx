import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Flex } from '../Flex/Flex';
import { LinkNav } from '../Link/Link';

const Menu = React.lazy(() => import('../Menu/Menu'));

const Nav = styled.nav`
    background-color: ${({ theme }) => theme.backgroundWhite};
    height: 70px;
    padding: 0px 20px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    display: flex;
    justify-content: left;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.02);
`;

const AlternativeColor = styled.span`
    color: ${({ theme }) => theme.primaryColor};
`;

const Desktop = styled.div`
    display: block;
    @media screen and (max-width: ${props => props.theme.breakPoints[0]}) {
        display: none;
    }
`;

const Mobile = styled.div`
    display: none;
    @media screen and (max-width: ${props => props.theme.breakPoints[0]}) {
        display: block;
    }
`;

export function Header() {

    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    return (
        <React.Fragment>
            <Nav>
                <Flex>
                    <LinkNav to="/">Learn <AlternativeColor>a11y</AlternativeColor></LinkNav>
                    <Desktop>
                        <Flex justifyContent='flex-end'>
                            <LinkNav to="/" minWidth={120}>Theory</LinkNav>
                            <LinkNav to="/examples">Examples</LinkNav>
                            <LinkNav to="/exercises">Exercises</LinkNav>
                            <Button btnText="Log In" icon={faSignInAlt} onClick={() => {}} />
                        </Flex>
                    </Desktop>
                    <Mobile>
                        <Flex>
                            <Button icon={faBars} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} ariaLabel="Menu"/>
                            <Suspense fallback={<></>}>
                                {isMobileMenuOpened && <Menu />}
                            </Suspense>
                        </Flex>
                    </Mobile>
                </Flex>
            </Nav>
        </React.Fragment>
    );
}