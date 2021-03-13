import React from 'react'

import addIcon from "../Assets/add.svg"

export default function NewQuestionaireButton() {
    return (
        <div className = "NewQuestionaireButtonContainer">
            <img src={addIcon} alt="Add Icon"/>
            <label className = "TitleDescription">{new Date().toDateString()}</label> 
            <h2>Click to Create New Questionnaire</h2>
        </div>
    )
}
