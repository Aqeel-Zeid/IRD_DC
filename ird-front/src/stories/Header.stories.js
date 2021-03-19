import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
  
};

const Template = (args) => <Header {...args} />;

export const HeaderDefault = Template.bind({});

HeaderDefault.args = {
  Title : "Example Title",
  Description : ""
};

export const HeaderWithDescription = Template.bind({});

HeaderWithDescription.args = {
  Title : "Example Title",
  Description : "Some description about the title"
};
