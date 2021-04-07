import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import numberImg from "./Assets/0_9.svg";
import table from "./Assets/table.svg";
import decisionMaking from "./Assets/decision_making.svg";
import font from "./Assets/font.svg";
import testQuiz from "./Assets/test_quiz.svg";

export default function QuestionFormat() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <BigIconButton
        Icon={font}
        IconDescription="Text Icon"
        Label="Text"
        Description="Free Range Text Responses"
        LinkTo="/CQ/QT/CreateTextQuestion"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={testQuiz}
        IconDescription="Test Quiz Icon"
        Label="Choice"
        Description="Select from a Pre-defined set of Responses"
        LinkTo="/CQ/QT/CreateChoiceQuestion"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={numberImg}
        IconDescription="Number Icon"
        Label="Number"
        Description="For Numeric Inputs"
        LinkTo="/CQ/QT/CreateNumberQuestion"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={table}
        IconDescription="Calendar Icon"
        Label="Table"
        Description="Question table"
        LinkTo="/CQ/QT/CreateTableQuestion"
      />
    </div>
  );
}
