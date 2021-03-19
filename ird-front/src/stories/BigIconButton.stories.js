import React from 'react';
import BigIconButton from '../components/BigIconButton';

import calanderIcon from "../Assets/add_file.svg"

export default {
  title: 'Layout/BigIconButton',
  component: BigIconButton,
  
};

const Template = (args) => 
    <BigIconButton {...args}/>

export const BigIconButtonDefault = Template.bind({});

BigIconButtonDefault.args = {
    Icon : calanderIcon,
    IconDescription : "Calander Icon",
    Label : "Calander",
    Description : "This is a Description of the Icon"
};


