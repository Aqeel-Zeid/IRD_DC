import React from "react";

import Checkbox from "../components/Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  Text: "Checked"
};

export const Unchecked = Template.bind({});

Unchecked.args = {
  Text: "Unchecked"
};

export const Disabled = Template.bind({});

Disabled.args = {
  Text: "Disabled",
  Disabled: "True",
};
