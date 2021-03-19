import React from 'react';import SectionSideBar from '../components/SectionSideBar';

export default {
  title: 'Layout/SectionSideBar',
  component: SectionSideBar,
  
};

const Template = (args) => 
    <SectionSideBar {...args} />
export const SectionSideBarDefault = Template.bind({});

SectionSideBarDefault.args = {
  
};


