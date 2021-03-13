import React from 'react';

import Checkbox from '../components/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  ClassName : "CheckboxChecked",
  ClassNameLabel: "CheckedLabel",
  Text : "Checked"
};

export const Unchecked = Template.bind({});

Unchecked.args = {
    ClassName : "CheckboxUnchecked",
    ClassNameLabel: "UncheckedLabel",
    Text : "Unchecked"
};

export const Disabled = Template.bind({});

Disabled.args = {
    ClassName : "CheckboxDisabled",
    ClassNameLabel: "CheckboxDisabledLabel",
    Text : "Disabled"
};
