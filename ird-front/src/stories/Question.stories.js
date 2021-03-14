import React from 'react';
import ChoiceAnswerComponent from '../components/ChoiceAnswerComponent';
import PlainNumberAnswerComponent from '../components/PlainNumberAnswerComponent';
import PlainTextAnswerComponent from '../components/PlainTextAnswerComponent';
import Question from '../components/Question';

export default {
  title: 'Layout/Question',
  component: Question,
  
};

const Template = (args) => 
  <Question {...args} />

export const QuestionDefault = Template.bind({});

QuestionDefault.args = {
    AnswerComponent : <h3></h3>
};

export const QuestionWithPlainTextAnswer = Template.bind({});

QuestionWithPlainTextAnswer.args = {
    AnswerComponent : <PlainTextAnswerComponent/>
};

export const QuestionWithChoiceAnswer = Template.bind({});

QuestionWithChoiceAnswer.args = {
    AnswerComponent : <ChoiceAnswerComponent/>
};
