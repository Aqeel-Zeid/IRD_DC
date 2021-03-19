import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import Checkbox from "../Checkbox";
import Question from "../Question";
import ChoiceAnswerComponent from "../ChoiceAnswerComponent";

import backEndSync from "../../State/backendSync";

import { Context } from "../../State/store";

export default function TextQuestion() {
  const [state, dispatch] = useContext(Context);

  const [formState, setFormState] = useState({
    label: "",
    type: "MULTIPLE_CHOICE",
    order: "1",
    is_multi_part: "false",
    column_variable_name: "test_variable_name_1",
    answer_hint: "",
    not_mandotary: "false",
    no_special_chars: "false",
    min_value: "",
    max_value: "",
    choices: [],
  });

  const [choices, setChoices] = useState({
    choice_name: "",
    value: "",
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    console.log(formState);
  }, [formState.choices.length]);

  return (
    <div className="ChoiceQuestionContainer">
      <div className="ChoiceQuestionLeft">
        <TextInput
          ClassName="TextArea"
          Label="Question"
          InputType="textarea"
          PlaceHolder="Do you live alone?"
          Value={formState.label}
          OnChangeMethod={(e) =>
            setFormState({ ...formState, label: e.target.value })
          }
        ></TextInput>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Column Variable Name"
            InputType="input"
            PlaceHolder="Column Name"
            Value={formState.column_variable_name}
            OnChangeMethod={(e) =>
              setFormState({
                ...formState,
                column_variable_name: e.target.value,
              })
            }
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
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ButtonMain
            ClassName="ButtonPrimary"
            Text="Save and Add to Questionaire"
            OnClickMethod={async (e) => {
              console.log(formState);
              await dispatch({
                type: "ADD_question",
                payload: formState,
              });
              //console.log(state.sections[state.selected_section].questions)
              backEndSync(state);
              setIsCompleted(true);
            }}
          ></ButtonMain>
          <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
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
            Value={choices.choice_name}
            OnChangeMethod={(e) =>
              setChoices({ ...choices, choice_name: e.target.value })
            }
          ></TextInput>
        </div>
        <div style={{ marginTop: 40 }}>
          <TextInput
            ClassName="TextInput"
            Label="Value"
            InputType="input"
            PlaceHolder="100"
            Value={choices.value}
            OnChangeMethod={(e) =>
              setChoices({ ...choices, value: e.target.value })
            }
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
          <label>{`${choices.choice_name} = ${choices.value} in the response data`}</label>
        </div>
        <ButtonMain
          ClassName="ButtonPrimary"
          Text="Add Choice"
          OnClickMethod={() => {
            setFormState({
              ...formState,
              choices: [...formState.choices, choices],
            });
          }}
        ></ButtonMain>

        <div style={{ marginTop: "16px" }}></div>

        <ButtonMain
          ClassName="ButtonSecondary"
          Text="Reset Choices"
          OnClickMethod={() => {
            setFormState({
              ...formState,
              choices: [],
            });
          }}
        ></ButtonMain>
      </div>
      <div className="ChoiceQuestionBottom">
        <label style={{ marginBottom: 20, fontSize: 20 }}>Preview</label>
        <Question
          Label={formState.label}
          QuestionNumber="1"
          AnswerComponent={
            <ChoiceAnswerComponent Choices={formState.choices} />
          }
        ></Question>
      </div>
      {isCompleted ? <Redirect push to="/CQ/QuestionaireEditor" /> : <></>}
    </div>
  );
}
