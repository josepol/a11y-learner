import React from 'react';
import { shallow } from 'enzyme';
import { Router } from './index';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from 'containers/Home';

describe('<Router />', () => {
  it('renders browser router and routes', () => {
    const wrapper = shallow(<Router />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props() as any;
      if (routeProps.path === '*') {
        (pathMap as any)[routeProps.path] = routeProps.children;
      } else {
        (pathMap as any)[routeProps.path] = routeProps.component;
      }
      return pathMap;
    }, {});
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    expect((pathMap as any)['/home']).toBe(Home);
    expect((pathMap as any)['*']).toStrictEqual(<Redirect to="/home" />);
  });
});