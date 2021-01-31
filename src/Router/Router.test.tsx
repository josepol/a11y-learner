import React from 'react';
import { shallow } from 'enzyme';
import { Router } from './index';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from '../containers/Home';

describe('<Router />', () => {
  it('renders browser router and routes', () => {
    const wrapper = shallow(<Router />);
    const pathMap = wrapper.find(Route).reduce((pathMap: any, route: any) => {
      const routeProps = route.props();
      if (routeProps.path === '*') {
        pathMap[routeProps.path] = routeProps.children;
      } else {
        pathMap[routeProps.path] = routeProps.component;
      }
      return pathMap;
    }, {});
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    expect(pathMap['/home']).toBe(Home);
    expect(pathMap['*']).toStrictEqual(<Redirect to="/home" />);
  });
});