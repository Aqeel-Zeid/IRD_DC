import React from 'react';

import SideBar from '../components/Sidebar';
import "../Styles/styles.css"

export default {
    title: 'Example/SideBar',
    component: SideBar,
    argTypes: {
      
    },
  };


const Template = (args) => <SideBar {...args} />;

export const SideBarV1 = Template.bind({});
