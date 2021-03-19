import React from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import BigIconButton from "../BigIconButton";
import Question from "../Question";
import numberImg from "./Assets/0_9.svg";
import choiceImg from "./Assets/test_quiz.svg";
import textImg from "./Assets/font.svg";

export default function CreateNewTableQuestion() {
  return (
    <div className="TableQuestionContainer">
      <div className="TableQuestionLeft">
        <label style={{ fontSize: 20, fontWeight: "bold" }}>
          Table Information
        </label>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextArea"
            Label="Main Question"
            InputType="textArea"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Main Variable Name"
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
        <hr style={{ marginTop: 40, border: "1px solid #12a2cf" }} />
        <div style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
          <label>Rows</label>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Row Label"
            InputType="input"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Row Variable Name"
            InputType="input"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 70 }}>
          <ButtonMain ClassName="ButtonPrimary" Text="Add Row"></ButtonMain>
        </div>
      </div>
      <div className="TableQuestionRight">
        <div style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
          <label>Columns</label>
        </div>
        <div style={{ marginTop: 30 }}>
          <label>Add Columns</label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BigIconButton
            givenHeight= "10vh"
            Icon={textImg}
            IconDescription="Decision Icon"
            Label=""
            Description="Text Column"
          />
          <BigIconButton
          givenHeight= "10vh"
            Icon={choiceImg}
            IconDescription="Decision Icon"
            Label=""
            Description="Choice Column"
          />
          <BigIconButton
          givenHeight= "10vh"
            Icon={numberImg}
            IconDescription="Decision Icon"
            Label=""
            Description="Number Column"
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Label"
            InputType="input"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Column Variable Name"
            InputType="input"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Value"
            InputType="input"
            PlaceHolder=""
          ></TextInput>
        </div>
        <div style={{ marginTop: 70 }}>
          <ButtonMain ClassName="ButtonPrimary" Text="Add Column"></ButtonMain>
        </div>
      </div>
      <div className="TableQuestionBottom">
        <label style={{ marginBottom: 20, fontSize: 20 }}>Preview</label>
        
        <ButtonMain ClassName="ButtonPrimary" Text="Save and Add to Questionnaire"/>
      </div>
    </div>
  );
}
