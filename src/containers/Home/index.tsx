import React, { Fragment } from 'react';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { HoverAnimation } from '../../components/HoverAnimation';
import { Heading } from '../../components/Heading';
import { Box } from '../../components/Box';
import { Flex } from '../../components/Flex';
import { Link } from '../../components/Link';
import { HomeStyle } from './Style';

export function Home() {
    return (
<Fragment>
<Header></Header>
<Main>
<Heading text="Apps" />
<HomeStyle>
<Flex justifyContent="space-around" wrap="wrap">
<HoverAnimation up={6}><Link to="/theory/basic"><Box>Shop List</Box></Link></HoverAnimation>
<HoverAnimation up={6}><Link to="/theory/html"><Box>Chat</Box></Link></HoverAnimation>
<HoverAnimation up={6}><Link to="/theory/css-javascript"><Box>Cook receipts</Box></Link></HoverAnimation>
</Flex>
</HomeStyle> 
</Main>
</Fragment>
    );
}
