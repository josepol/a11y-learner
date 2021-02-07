import React, { useState, Suspense } from 'react';
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavStyle, DesktopStyle, AlternativeColorStyle, MobileStyle } from './Style';
import { Modal } from 'components/Modal';
import { Login } from 'containers/Login';
import { Flex } from 'components/Flex';
import { Link } from 'components/Link';
import { Button } from 'components/Button';

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
                <Button primary={true} icon={faSignInAlt} onClick={() => setIsModalOpen(!isModalOpen)} ariaLabel="open login dialog"/>
              </Flex>
            </DesktopStyle>
            <MobileStyle>
              <Flex>
                <Button primary={true} icon={faBars} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} ariaLabel="open menu dialog"/>
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