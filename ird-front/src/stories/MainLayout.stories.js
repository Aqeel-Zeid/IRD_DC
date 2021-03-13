import React from 'react';

import MainLayout from '../components/MainLayout';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
  
};

const Template = (args) => 
    <MainLayout {...args} > 
        <h1> Some Content </h1>
   
    </MainLayout>;

export const MainLayoutDefault = Template.bind({});

MainLayoutDefault.args = {

};


