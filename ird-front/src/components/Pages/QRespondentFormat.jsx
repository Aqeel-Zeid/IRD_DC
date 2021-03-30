import React, { useContext } from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import formatImage from "./Assets/respondentDescription.svg";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { Context } from "../../State/store";

export default function QRespondentFormat() {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="RespondentFormatContainer">
      <div className="RespondentFormatLeft">
        <label style={{ fontSize: "20px", fontWeight: "bold" }}>
          Format of the Respondent Code
        </label>
        <img
          style={{ width: "100%", marginTop: "24px" }}
          src={formatImage}
          alt="Norway"
        />
        <div style={{ marginTop: 80 }}>
          <TextInput
            Label="Type The Format"
            InputType="input"
            PlaceHolder="AAA-999-AAA"
            FieldValue={state.respondent_code_format.format}
            OnChangeMethod={(e) => {
              dispatch({
                type: "SET_respondent_code_format__format",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="RespondentFormatRight">
        <TextInput
          ClassName="TextArea"
          Label="Description of"
          InputType="textArea"
          PlaceHolder="Describe how to use the respondent code"
          FieldValue={state.respondent_code_format.description}
          OnChangeMethod={(e) => {
            dispatch({
              type: "SET_respondent_code_format__description",
              payload: e.target.value,
            });
          }}
        />
        <div>
          <TextInput
            ClassName="TextInput"
            Label="Example of usage"
            InputType="input"
            PlaceHolder="Examples of the code usage"
            FieldValue={state.respondent_code_format.example_usage}
            OnChangeMethod={(e) => {
              dispatch({
                type: "SET_respondent_code_format__example_usage",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to="/CQ/QuestionaireEditor"
            onClick={async () => {
              //Set qid
              await dispatch({ type: "SET_qid", payload: uuidv4() });

              //set created_time
              await dispatch({
                type: "SET_created_date",
                payload: new Date().toISOString(),
              });

              console.log(state);

              let current_date = new Date();

              //create the questionaire in the server
              fetch("http://localhost:4000/CreateNewQuestionaire", {
                method: "POST",
                body: JSON.stringify({
                  questionaireName: state.questionaireName,
                  questionaireDescription: state.questionaireDescription,
                  respondent_code_format: state.respondent_code_format,
                  qid: state.qid,
                  created_date: current_date,
                  selected_section: "0",
                  sections: [
                    {
                      section_name: "General Section",
                      is_skip_logic: "false",
                      description: "General Information Section",
                      order: "1",
                      questions: [],
                    },
                  ],
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
              })
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
            }}
          >
            <ButtonMain ClassName="ButtonPrimary" Text="Save" />
          </Link>
          <Link to="/CQ/GeneralInformation">
            <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
          </Link>
        </div>
        <div style={{ marginTop: 80 }}></div>
      </div>
    </div>
  );
}
