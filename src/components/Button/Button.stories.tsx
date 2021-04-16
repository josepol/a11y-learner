import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IProps } from 'components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
  decorators: [(Button) => <div style={{ margin: '2px' }}><Button/></div>]
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  primary: true,
  btnText: 'Log in',
  ariaLabel: 'Log in',
};