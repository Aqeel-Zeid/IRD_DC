import React from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import Checkbox from "../Checkbox";
import Question from "../Question";
import ChoiceAnswerComponent from "../ChoiceAnswerComponent";

export default function ChoiceQuestion() {
  return (
    <div className="ChoiceQuestionContainer">
      <div className="ChoiceQuestionLeft">
        <TextInput
          ClassName="TextArea"
          Label="Question"
          InputType="textarea"
          PlaceHolder="Do you live alone?"
        ></TextInput>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Column Variable Name"
            InputType="input"
            PlaceHolder="Column Name"
          ></TextInput>
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: "16px",
            fontWeight: "normal",
            color: "#aaaaaa",
          }}
        >
          <label>
            * This name uniquely identifies the column in the SPSS table or
            excel sheet
          </label>
        </div>
      </div>
      <div className="ChoiceQuestionRight">
        <label>Choices</label>
          <div style={{ marginTop: 40 }}>
            <TextInput
              ClassName="TextInput"
              Label="Choice Name"
              InputType="input"
              PlaceHolder="Yes"
            ></TextInput>
          </div>
          <div style={{ marginTop: 40 }}>
            <TextInput
              ClassName="TextInput"
              Label="Value"
              InputType="input"
              PlaceHolder="100"
            ></TextInput>
          </div>
          <div
          style={{
            marginTop: 20,
            marginBottom: 30,
            fontSize: "16px",
            fontWeight: "normal",
            color: "#aaaaaa",
          }}
        >
          <label>
            * When this choice is selected, this value will be saved
          </label>
        </div>
        <ButtonMain ClassName="ButtonPrimary" Text="Add Choice"></ButtonMain>
        <div
          style={{ marginTop: 70, display: "flex", justifyContent: "space-evenly" }}
        >
          <ButtonMain ClassName="ButtonPrimary" Text="Add"></ButtonMain>
          <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
        </div>
      </div>
      <div className="ChoiceQuestionBottom">
      <label style = {{ marginBottom: 20, fontSize: 20 }} >Preview</label>
        <Question AnswerComponent = {<ChoiceAnswerComponent/>}></Question>
        </div>
    </div>
  );
}
