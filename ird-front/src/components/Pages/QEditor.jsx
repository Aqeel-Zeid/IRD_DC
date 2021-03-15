import React from "react";
import SideBar from "../SectionSideBar";
import PlainTextAnswerComponent from "../PlainTextAnswerComponent";
import ChoiceAnswerComponent from "../ChoiceAnswerComponent";
import QuestionFormat from "../Question";
import Button from "../ButtonMain";

export default function QEditor(props) {
  return (
    <div className="QEditorContainer">
      <div className="QEditorSidebar">
        <SideBar/>
      </div>
      <div className="QEditorQuestions">
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<PlainTextAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<PlainTextAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<PlainTextAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<ChoiceAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<ChoiceAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<ChoiceAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<ChoiceAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <QuestionFormat
            AnswerComponent={<ChoiceAnswerComponent />}
          ></QuestionFormat>
        </div>
        <div style={{ marginBottom: 24 }}>
          <Button ClassName="ButtonPrimary" Text="Add Question"></Button>
        </div>
        <div style={{ marginBottom: 24 }}>
          <Button
            ClassName="ButtonPrimary"
            Text="Save Section To Library"
          ></Button>
        </div>
      </div>
    </div>
  );
}
