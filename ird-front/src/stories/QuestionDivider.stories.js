import React from 'react';

import QuestionDivider from '../components/QuestionDivider';

export default {
  title: 'Example/QuestionDivider',
  component: QuestionDivider,
};

const Template = (args) => <QuestionDivider {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  ClassName : "HorizontalDivider",
  ClassNameDividerLabel : "HorizontalDividerLabel"
};

export const Vertical = Template.bind({});

Vertical.args = {
    ClassName : "VerticalDivider",
    ClassNameDividerLabel : "VerticalDividerLabel"
};

