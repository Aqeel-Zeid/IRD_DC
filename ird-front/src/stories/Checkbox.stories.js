import React from "react";

import Checkbox from "../components/Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  Text: "Click"
};

export const Disabled = Template.bind({});

Disabled.args = {
  Text: "Disabled",
  Disabled: "True",
};
