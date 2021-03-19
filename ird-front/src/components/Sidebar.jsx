import React from "react";
import logo from "../Assets/SideNavIcons/logo.svg";
import createTemplates from "../Assets/SideNavIcons/edit.svg";
import settings from "../Assets/SideNavIcons/settings.svg";
import sync from "../Assets/SideNavIcons/cloud.svg";
import data from "../Assets/SideNavIcons/inbox.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="SideBarContainer">
      <Link to ="/">
        <img
        style={{marginTop: "16px"}}
          src={logo}
          alt="Logo Institute of Research and Development"
          className="SideBarIcon"
        />
      </Link>
      <Link to ="/">
        <img
          src={createTemplates}
          alt="Create new Questionnairs"
          className="SideBarIcon"
        />
      </Link>
      <img src={settings} alt="Settings" className="SideBarIcon" />
      <img src={sync} alt="Synchronize data" className="SideBarIcon" />
      <img src={data} alt="View and Export Data" className="SideBarIcon" />
    </div>
  );
}
