import React from "react";
import logo from "../Assets/SideNavIcons/logo.svg";
import createTemplates from "../Assets/SideNavIcons/edit.svg";
import settings from "../Assets/SideNavIcons/settings.svg";
import sync from "../Assets/SideNavIcons/cloud.svg";
import data from "../Assets/SideNavIcons/inbox.svg";

export default function Sidebar() {
  return (
    <div className="SideBarContainer">
      <img
        src={logo}
        alt="Logo Institute of Research and Development"
        className="SideBarIcon"
      />
      <img
        src={createTemplates}
        alt="Create new Questionnairs"
        className="SideBarIcon"
      />
      <img src={settings} alt="Settings" className="SideBarIcon" />
      <img src={sync} alt="Synchronize data" className="SideBarIcon" />
      <img src={data} alt="View and Export Data" className="SideBarIcon" />
    </div>
  );
}
