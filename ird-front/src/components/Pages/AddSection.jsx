import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import addFile from "./Assets/add_file.svg";
import libraryIcon from "./Assets/library.svg";
import { Link } from "react-router-dom";

export default function AddSection() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BigIconButton
        Icon={libraryIcon}
        IconDescription="Add To Library Icon"
        Label="Select From Library"
        Description="Select previosly created section"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={addFile}
        IconDescription="Create New Section Icon"
        Label="New Section"
        Description="Create new section"
        LinkTo="/CQ/AS/CreateSection"
      />
    </div>
  );
}
