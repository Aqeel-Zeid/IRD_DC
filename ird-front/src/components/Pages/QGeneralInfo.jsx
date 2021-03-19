import React, {useEffect,useContext} from "react";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";
import { Link } from "react-router-dom";

import {Context} from "../../State/store"

export default function QGeneralInfo(props) {

  const [state, dispatch] = useContext(Context);



  return (
    <div style={{ marginTop: 40 }}>
      <TextInput
        Label="Questionnaire Name"
        InputType="input"
        PlaceHolder="Enter Questionnaire Name"
        FieldValue={state.questionaireName}
        OnChangeMethod ={ (e) => {
          //console.log(e.target.value)
          dispatch({ type: "SET_questionaireName", payload: e.target.value });
        }}
      ></TextInput>
      <br />
      <br />
      <br />
      <TextInput
        Label="Description"
        InputType="textArea"
        PlaceHolder="Enter Description"
        FieldValue={state.questionaireDescription}
        OnChangeMethod={(e) => {
          dispatch({ type: "SET_questionaireDescription", payload: e.target.value });
        }}
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
