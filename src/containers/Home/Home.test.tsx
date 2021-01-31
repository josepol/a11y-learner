import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '.';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Heading } from 'components/Heading';
import { HomeStyle } from './Style';
import { Flex } from 'components/Flex';
import { HoverAnimation } from 'components/HoverAnimation';
import { Link } from 'components/Link';
import { Box } from 'components/Box';
import { ShallowWrapper } from 'enzyme';
import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

describe('<Home />', () => {
  let wrapper: ShallowWrapper<any>;
  let headerWrapper: ShallowWrapper<any>;
  let mainWrapper: ShallowWrapper<any>;
  let headingWrapper: ShallowWrapper<any>;
  let homeStyleWrapper: ShallowWrapper<any>;
  let flexWrapper: ShallowWrapper<any>;
  let hoverAnimationWrapper: ShallowWrapper<any>;
  let linkWrapper: ShallowWrapper<any>;
  let boxWrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    headerWrapper = wrapper.find(Header);
    mainWrapper = wrapper.find(Main);
    headingWrapper = wrapper.find(Heading);
    homeStyleWrapper = wrapper.find(HomeStyle);
    flexWrapper = wrapper.find(Flex);
    hoverAnimationWrapper = wrapper.find(HoverAnimation);
    linkWrapper = wrapper.find(Link);
    boxWrapper = wrapper.find(Box);
  });

  it('renders elements', () => {
    expect(headerWrapper).toHaveLength(1);
    expect(mainWrapper).toHaveLength(1);
    expect(headingWrapper).toHaveLength(1);
    expect(homeStyleWrapper).toHaveLength(1);
    expect(flexWrapper).toHaveLength(1);
    expect(hoverAnimationWrapper).toHaveLength(3);
    expect(linkWrapper).toHaveLength(3);
    expect(boxWrapper).toHaveLength(3);
  });

  it('renders heading title', () => {
    expect(headingWrapper).toHaveProperty('text');
    expect(headingWrapper.prop('text')).toBe('Apps');
  });

  it('renders flex box params', () => {
    expect(flexWrapper.prop('justifyContent')).toBe('space-around');
    expect(flexWrapper.prop('wrap')).toBe('wrap');
  });

  it('renders navlinks with prop routes', () => {
    expect(linkWrapper.first().props().to).toBe('/theory/basic');
    expect(linkWrapper.get(1).props.to).toBe('/theory/html');
    expect(linkWrapper.last().props().to).toBe('/theory/css-javascript');
  });

  it('renders home styles', () => {
    expect(homeStyleWrapper).toHaveStyleRule('max-width', '950px');
  });

  afterEach(() => {
    cleanup();
  });
});