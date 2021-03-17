import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import skipLogic from "./Assets/skipLogic.svg";
import normalSection from "./Assets/normalSection.svg";

export default function CreateSection() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BigIconButton
        Icon={normalSection}
        IconDescription="Normal Section Icon"
        Label="Normal Section"
        Description="Single question single Answer"
        LinkTo = "/CQ/AS/CreateNormalSection"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={skipLogic}
        IconDescription="Skip Logic Icon"
        Label="Skip Logic Section"
        Description="Skip questions based on a condition"
      />
    </div>
  );
}
