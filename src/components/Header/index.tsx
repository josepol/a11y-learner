import React, { useState, Suspense } from 'react';
import { Button } from '../Button';
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Flex } from '../Flex';
import { Link } from '../Link';
import { Modal } from '../Modal';
import { Login } from '../../containers/Login';
import { NavStyle, DesktopStyle, AlternativeColorStyle, MobileStyle } from './Style';

const Menu = React.lazy(() => import('../Menu'));

export function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Modal isModalOpen={isModalOpen} modalChildren={<Login />}>
        <NavStyle>
          <Flex>
            <Link to="/theory">Hello <AlternativeColorStyle>Homer!</AlternativeColorStyle></Link>
            <DesktopStyle>
              <Flex justifyContent='flex-end'>
                <Link to="/" minWidth={120}>Apps</Link>
                <Button icon={faSignInAlt} onClick={() => setIsModalOpen(!isModalOpen)} ariaLabel="open login dialog"/>
              </Flex>
            </DesktopStyle>
            <MobileStyle>
              <Flex>
                <Button icon={faBars} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} ariaLabel="open menu dialog"/>
                <Suspense fallback={null}>
                  {isMobileMenuOpen && <Menu />}
                </Suspense>
              </Flex>
            </MobileStyle>
          </Flex>
        </NavStyle>
      </Modal>
    </React.Fragment>
  );
}