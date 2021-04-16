import React from 'react';
import App from 'App';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Router } from 'Router';
import { regularTheme } from 'Theme';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders theme provider', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ThemeProvider)).toHaveLength(1);
    expect(wrapper.find(ThemeProvider).prop('theme')).toBe(regularTheme);
  });

  it('renders router', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router)).toHaveLength(1);
  });
});