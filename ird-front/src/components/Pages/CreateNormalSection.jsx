import React from "react";
import QuestionDivider from "../QuestionDivider";
import BigIconButton from "../BigIconButton";
import addFile from "./Assets/add_file.svg";
import libraryIcon from "./Assets/library.svg";
import { Link } from "react-router-dom";
import TextInput from "../TextInput";
import ButtonMain from "../ButtonMain";

export default function CreateNormalSection() {
  return (
    <div>
      <TextInput Label="Section Name" InputType="input" />
      <div style={{ marginTop: 40 }}>
        <TextInput Label="Section Description" InputType="textArea" />
      </div>
      <div style = {{ display: "flex", flexDirection: "row", marginTop: 100, justifyContent: "flex-end" }} >
        <ButtonMain ClassName="ButtonSecondary" Text="Back" />
        <ButtonMain ClassName="ButtonPrimary" Text="Add" />
      </div>
    </div>
  );
}
