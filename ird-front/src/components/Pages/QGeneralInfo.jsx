import React from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import { Link } from "react-router-dom";


export default function QGeneralInfo(props) {

  return (
    <div style={{ marginTop: 40 }}>
      <TextInput
        ClassName="TextInput"
        Label="Questionnaire Name"
        InputType="input"
        PlaceHolder="Enter Questionnaire Name"
      ></TextInput>
      <br />
      <br />
      <br />
      <TextInput
        ClassName="TextArea"
        Label="Description"
        InputType="textArea"
        PlaceHolder="Enter Description"
      ></TextInput>
      <br />
      <br />
      <div style={{ marginTop: 80 }}>
        <Link to="/CQ/SelectRespondentCode">
          <ButtonMain ClassName="ButtonPrimary" Text="Next"></ButtonMain>
        </Link>
        <div style={{ alignSelf: "center" }}></div>
      </div>
    </div>
  );
}
