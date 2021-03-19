import React from 'react'
import { Link } from 'react-router-dom'

import addIcon from "../Assets/add.svg"

export default function NewQuestionaireButton() {
    return (
        <Link to="/CQ/GeneralInformation">
            <div className = "NewQuestionaireButtonContainer">
                <img src={addIcon} alt="Add Icon"/>
                <label className = "TitleDescription">{new Date().toDateString()}</label> 
                <h2>Click to Create New Questionnaire</h2>
            </div>
        </Link>
    )
}
