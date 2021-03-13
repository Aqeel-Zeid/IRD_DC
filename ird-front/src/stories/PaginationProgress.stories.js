import React from 'react';
import PaginationProgress from '../components/PaginationProgress';

export default {
  title: 'Layout/PaginationProgress',
  component: PaginationProgress,
  
};

const Template = (args) => 
    <PaginationProgress {...args}/>

export const PaginationProgressDefault = Template.bind({});

PaginationProgressDefault.args = {
  NumberOfItems : 5,
  CurrentItem : 2
};


