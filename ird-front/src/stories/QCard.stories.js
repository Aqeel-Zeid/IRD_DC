import React from 'react';
import QCard from '../components/QCard';

export default {
  title: 'Layout/QCard',
  component: QCard,
  
};

const Template = (args) => 
    <QCard {...args}/>

export const QCardDefault = Template.bind({});

QCardDefault.args = {
    QuestionaireName : "Questionaire Name",
    Date : new Date().toLocaleDateString()
};


