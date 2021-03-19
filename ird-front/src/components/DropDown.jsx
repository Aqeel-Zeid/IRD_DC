import React from "react";

export default function DropDown({
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
      <select name="questionnaires" id="questionnaires" placeholder={PlaceHolder} className="DropDown">
        <option value="Questionnaire 1">Questionnaire 1</option>
        <option value="Questionnaire 2">Questionnaire 2</option>
        <option value="Questionnaire 3">QuestionnSaire 3</option>
        <option value="Questionnaire 4">Questionnaire 4</option>
      </select>
    </div>
  );
}
