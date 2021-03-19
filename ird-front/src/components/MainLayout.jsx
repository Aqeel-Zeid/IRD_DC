import React from "react";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout(props) {
  return (
    <div className="MainContainer" style={{ backgroundColor: props.bgColor }}>
      <div
        className="MainContainerSideBar"
        style={{ backgroundColor: props.bgColor }}
      >
        <SideBar />
      </div>
      <div className="MainContainerHeaderBody">
        <div
          className="MainContainerHeader"
          style={{ backgroundColor: props.bgColor }}
        >
          <Header Title={props.Title} Description={props.Description} />
        </div>

        <div
          className="MainContainerBody"
          style={{ backgroundColor: props.bgColor }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
