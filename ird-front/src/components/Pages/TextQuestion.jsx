import React , {useState,useContext} from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import Checkbox from "../Checkbox";
import Question from "../Question";
import PlainTextAnswerComponent from "../PlainTextAnswerComponent";

import {Context} from "../../State/store"

export default function TextQuestion() {

  const [state, dispatch] = useContext(Context);

  const [formState, setFormState] = useState({
          label: "",
          type: "TEXT",
          order: "1",
          is_multi_part: "false",
          column_variable_name: "",
          answer_hint: "",
          not_mandotary: "false",
          no_special_chars: "false",
          min_value: "1",
          max_value: "100",
          choices: [
            {
              choice_name: "test choice",
              value: "1"
            }
          ]
  })

  return (
    <div className="TextQuestionContainer">
      <div className="TextQuestionLeft">
        <TextInput
          ClassName="TextArea"
          Label="Question"
          InputType="textarea"
          PlaceHolder="Do you live alone?"
          OnChangeMethod = { (e) => { setFormState({...formState , label : e.target.value}) }}
          FieldValue = {formState.label}
        ></TextInput>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Answer Hint"
            InputType="input"
            PlaceHolder="Hint"
            OnChangeMethod = { (e) => { setFormState({...formState , answer_hint : e.target.value}) }}
            FieldValue = {formState.answer_hint}
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Column Variable Name"
            InputType="input"
            PlaceHolder="Column Name"
            OnChangeMethod = { (e) => { setFormState({...formState , column_variable_name : e.target.value}) }}
            FieldValue = {formState.column_variable_name}
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
              Label="Minimum Characters"
              InputType="input"
              PlaceHolder="0"
              OnChangeMethod = { (e) => { setFormState({...formState , min_value : e.target.value}) }}
              FieldValue = {formState.min_value}
            ></TextInput>
          </div>
          <div style={{ marginTop: 40, width: 100 }}>
            <TextInput
              ClassName="TextInput"
              Label="Maximum Characters"
              InputType="input"
              PlaceHolder="100"
              OnChangeMethod = { (e) => { setFormState({...formState , max_value : e.target.value}) }}
              FieldValue = {formState.max_value}
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
          <Checkbox Text="Not Mandatory" ></Checkbox>
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
          <ButtonMain ClassName="ButtonPrimary" Text="Add" onClick = {
            () => {
                dispatch({
                  type : "ADD_question",
                  payload : formState
                })
            }
          }/>
          <ButtonMain ClassName="ButtonSecondary" Text="Back"/>
        </div>
      </div>
      <div className="TextQuestionBottom">
      <label style = {{ marginBottom: 20, fontSize: 20 }} >Preview</label>
          <Question 
              AnswerComponent = {<PlainTextAnswerComponent Placeholder = {formState.answer_hint}/>}
              Label = {formState.label}
              QuestionNumber = "1"
          />
        </div>
    </div>
  );
}
