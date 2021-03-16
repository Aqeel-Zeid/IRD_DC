import React from 'react'
import ViewIcon from "../Assets/ViewIcon.svg"

export default function QCard(props) {
    return (
        <div className = "QcardContainer" >
            <label className = "bodyText" style = {{flexGrow : "4"}}> {props.QuestionaireName}</label>
            <label className = "bodyText" > {props.Date}  </label>
            <img src = {ViewIcon} alt = "View Questionnaire"  />
        </div>
    )
}
