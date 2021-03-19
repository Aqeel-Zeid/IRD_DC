import React from "react";
import QuestionNumber from "./QuestionNumber";
import SettingsIcon from "../Assets/settings_2.svg";
import DeleteIcon from "../Assets/trash_can.svg";
import MoveIcon from "../Assets/move.svg";

import SaveIcon from "../Assets/wish_list.svg"

export default function Question(props) {
  return (
    <div className="QuestionContainer" style = {{marginBottom:32}}>
      <div className="QuestionHeader">
        <QuestionNumber Number={props.QuestionNumber} />
        <div className = "QuestionAndAnswerPanel">
          <label className="BodyText">
              {props.Label}
          </label>
          <div className = "AnswerComponentContainer">
            {
              props.AnswerComponent
            }
          </div>
        </div>
    
        <div className="QuestionControls">
          <img src={SaveIcon} alt="Save To Question Library" />
          <img src={SettingsIcon} alt="Settings" />
          <img src={DeleteIcon} alt="Delete" />
          <img src={MoveIcon} alt="Re position" />
        </div>
      </div>
  
    </div>
  );
}
