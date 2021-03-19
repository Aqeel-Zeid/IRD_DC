import React from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import Checkbox from "../Checkbox";
import Question from "../Question";
import ChoiceAnswerComponent from "../ChoiceAnswerComponent";
import DropDown from "../DropDown";

export default function CreateSkipLogic() {
  return (
    <div>
      <label style={{ fontSize: 20, fontWeight: "bold" }}>
        Select the trigger question
      </label>
      <div style={{ marginTop: 30 }}>
        <DropDown
          Label="Section which the trigger question belongs to"
          PlaceHolder="Section 1"
        />
      </div>

      <div style={{ marginTop: 50 }}>
        <DropDown
          Label="Select the trigger question"
          PlaceHolder="Did you feel you want to do this ?"
        />
      </div>
      <hr style={{ marginTop: 70, border: "1px solid #12a2cf" }} />
      <div style={{ fontSize: 20, fontWeight: "bold", marginTop: 50 }}>
        <label>Map Responses to Sections</label>
      </div>
      <div style={{ padding: 24, border: "2px solid #12a2cf", marginTop: 32 }}>
        <DropDown
          Label="IF Response A is selected move to"
          PlaceHolder="Section A"
        />
      </div>
      <div style={{ padding: 24, border: "1px solid #12a2cf", marginTop: 24 }}>
        <DropDown
          Label="IF Response B is selected move to"
          PlaceHolder="Section B"
        />
      </div>
      <div
          style={{ marginTop: 70, display: "flex", justifyContent: "flex-end" }}
        >
          <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
          <ButtonMain ClassName="ButtonPrimary" Text="Save"></ButtonMain>
        </div>
    </div>
  );
}
