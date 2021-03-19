import React, { useState, useContext } from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import addFile from "./Assets/add_file.svg";
import libraryIcon from "./Assets/library.svg";
import { Link, Redirect } from "react-router-dom";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";

import { Context } from "../../State/store";

import backEndSync from "../../State/backendSync";

export default function CreateNormalSection() {
  const [formState, setFormState] = useState({
    section_name: "",
    description: "",
  });

  const [state, dispatch] = useContext(Context);

  const [isComplete, setisComplete] = useState(false);

  return (
    <div>
      <TextInput
        Label="Section Name"
        InputType="input"
        Value={formState.section_name}
        OnChangeMethod={(e) => {
          setFormState({ ...formState, section_name: e.target.value });
        }}
      />
      <div style={{ marginTop: 40 }}>
        <TextInput
          Label="Section Description"
          InputType="textArea"
          Value={formState.description}
          OnChangeMethod={(e) => {
            setFormState({ ...formState, description: e.target.value });
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 100,
          justifyContent: "flex-end",
        }}
      >
        <ButtonMain ClassName="ButtonSecondary" Text="Back" />
        <ButtonMain
          ClassName="ButtonPrimary"
          Text="Add"
          OnClickMethod={async () => {
            //console.log(formState);
            await dispatch({
              type: "ADD_SECTION",
              payload: formState,
            });
            backEndSync(state);
            setisComplete(true);
          }}
        />
        {isComplete ? <Redirect to="/CQ/QuestionaireEditor" /> : <></>}
      </div>
    </div>
  );
}
