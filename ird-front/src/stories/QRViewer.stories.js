import React from "react";

import QRViewer from "../components/QRViewer";

export default {
  title: "Example/QRViewer",
  component: QRViewer,
};

const Template = (args) => <QRViewer {...args}/>;

export const Default = Template.bind({});

Default.args = {
  
};

