import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import numberImg from "./Assets/0_9.svg";
import calendar from "./Assets/calendar.svg";
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
        Description="Response"
        LinkTo = "/CQ/QT/CreateTextQuestion"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}> 
        <BigIconButton
          Icon={decisionMaking}
          IconDescription="Decision Icon"
          Label="Yes / No"
          Description="Response"
        />
        <BigIconButton
          Icon={testQuiz}
          IconDescription="Test Quiz Icon"
          Label="Multiple Choice"
          Description="Response"
          LinkTo = "/CQ/QT/CreateChoiceQuestion"
        />
      </div>
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={calendar}
        IconDescription="Calendar Icon"
        Label="Date"
        Description="Response"
      />
      <QuestionDivider
        ClassName="VerticalDivider"
        ClassNameDividerLabel="VerticalDividerLabel"
      />
      <BigIconButton
        Icon={numberImg}
        IconDescription="Number Icon"
        Label="Number"
        Description="Response"
        LinkTo = "/CQ/QT/CreateNumberQuestion"
      />
    </div>
  );
}
