import React from "react";

export default function TextInput({
  Label,
  InputType,
  PlaceHolder,
  OnChangeMethod,
  FieldValue,
}) {
  //

  return (
    <div>
      <label>{Label}</label>
      {InputType === "textArea" ? (
        <textarea 
            placeholder={PlaceHolder} 
            className="TextArea" 
            onChange = { (e) => OnChangeMethod(e) }
            value = {FieldValue}
            />
      ) : (
        <input 
            className="TextInput" 
            placeholder={PlaceHolder} 
            onChange = { (e) => OnChangeMethod(e) }
            value = {FieldValue}
            />
      )}
    </div>
  );
}
