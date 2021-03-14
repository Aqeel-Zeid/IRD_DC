import React from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import Checkbox from "../Checkbox";
import Question from "../Question";

export default function TextQuestion() {
  return (
    <div className="TextQuestionContainer">
      <div className="TextQuestionLeft">
        <TextInput
          ClassName="TextArea"
          Label="Question"
          InputType="textarea"
          PlaceHolder="Do you live alone?"
        ></TextInput>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Answer Hint"
            InputType="input"
            PlaceHolder="Hint"
          ></TextInput>
        </div>
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
      <div className="TextQuestionRight">
        <label>Rules</label>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ marginTop: 40, width: 100 }}>
            <TextInput
              ClassName="TextInput"
              Label="Min"
              InputType="input"
              PlaceHolder="0"
            ></TextInput>
          </div>
          <div style={{ marginTop: 40, width: 100 }}>
            <TextInput
              ClassName="TextInput"
              Label="Max"
              InputType="input"
              PlaceHolder="100"
            ></TextInput>
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <Checkbox Text="No Special Characters"></Checkbox>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            color: "#aaaaaa",
          }}
        >
          <label>@, #, $, % are not allowed</label>
        </div>
        <div style={{ marginTop: 40 }}>
          <Checkbox Text="Not Mandatory"></Checkbox>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            color: "#aaaaaa",
          }}
        >
          <label>Can Leave empty</label>
        </div>
        <div
          style={{ marginTop: 120, display: "flex", justifyContent: "space-evenly" }}
        >
          <ButtonMain ClassName="ButtonPrimary" Text="Add"></ButtonMain>
          <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
        </div>
      </div>
      <div className="TextQuestionBottom">
      <label>Preview</label>
        <Question></Question>
        </div>
    </div>
  );
}
