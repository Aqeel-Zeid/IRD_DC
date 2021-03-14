import React from 'react';
import Question from '../components/Question';

export default {
  title: 'Layout/Question',
  component: Question,
  
};

const Template = (args) => 
  <Question {...args} />

export const QuestionDefault = Template.bind({});

QuestionDefault.args = {
  
};

