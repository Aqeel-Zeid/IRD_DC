import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import table from "./Assets/table.svg";
import question from "./Assets/question.svg";

export default function CreateQuestion() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BigIconButton
        Icon={question}
        IconDescription="Single Question Icon"
        Label="Single Question"
        Description="Single question single Answer"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={table}
        IconDescription="Question Group Icon"
        Label="Question Group"
        Description="Contains multiple small questions"
      />
    </div>
  );
}
