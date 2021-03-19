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
  InputType: "input",
  PlaceHolder: "Something"
};

export const TextInputMultipleLine = Template.bind({});

TextInputMultipleLine.args = {
    Label: "Sample Text",
    ClassName : "TextArea",
    InputType: "textarea",
    PlaceHolder: "Something"
};
