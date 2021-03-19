import React from 'react';import QuestionNumber from '../components/QuestionNumber';

export default {
  title: 'Layout/QuestionNumber',
  component: QuestionNumber,
  
};

const Template = (args) => 
    <QuestionNumber {...args} />

export const QuestionNumberDefault = Template.bind({});

QuestionNumberDefault.args = {
  Number : 0
};

export const QuestionNumberSingleDigit = Template.bind({});

QuestionNumberSingleDigit.args = {
  Number : 1
};

export const QuestionNumberDoubleDigit = Template.bind({});

QuestionNumberDoubleDigit.args = {
  Number : 12
};
