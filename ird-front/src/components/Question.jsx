import React from "react";
import QuestionNumber from "./QuestionNumber";
import SettingsIcon from "../Assets/settings_2.svg";
import DeleteIcon from "../Assets/trash_can.svg";
import MoveIcon from "../Assets/move.svg";

export default function Question() {
  return (
    <div className="QuestionContainer">
      <div className="QuestionHeader">
        <QuestionNumber Number="0" />
        <label className="BodyText">
         Is Your Mother Available at home ?
         
        </label>
        <div className="QuestionControls">
          <img src={SettingsIcon} alt="Settings" />
          <img src={DeleteIcon} alt="Delete" />
          <img src={MoveIcon} alt="Re position" />
        </div>
      </div>
      <div className="QuestionBody"></div>
    </div>
  );
}
