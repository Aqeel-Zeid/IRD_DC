import React from 'react';

import TextInput from '../components/TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
  
};

const Template = (args) => <TextInput {...args} />;

export const TextInputDefault = Template.bind({});

TextInputDefault.args = {
  Label: "Sample Text",
  ClassName : "TextInput",
  Text : "",
  InputType: "input"
};

export const TextInputMultipleLine = Template.bind({});

TextInputMultipleLine.args = {
    Label: "Sample Text",
    ClassName : "TextArea",
    Text : "",
    InputType: "textarea"
};
