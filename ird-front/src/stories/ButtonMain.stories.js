import React from 'react';

import ButtonMain from '../components/ButtonMain';

export default {
  title: 'Example/ButtonMain',
  component: ButtonMain,
};

const Template = (args) => <ButtonMain {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ClassName : "ButtonPrimary",
  Text : "Button Primary"
};

export const Secondary = Template.bind({});

Secondary.args = {
    ClassName : "ButtonSecondary",
    Text : "Button Second"
};

export const Disabled = Template.bind({});

Disabled.args = {
    ClassName : "ButtonDisabled",
    Text : "Button Disabled"
};
