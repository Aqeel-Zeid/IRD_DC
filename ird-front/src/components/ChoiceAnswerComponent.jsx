import React from 'react'
import QuestionNumber from './QuestionNumber'

export default function ChoiceAnswerComponent() {
    return (
        <div>
            <div className = "Choice">
                <QuestionNumber Number = "a"/>
                <label className = "BodyText">Choice A</label>
            </div>
            <div className = "Choice SelectedChoice">
                <QuestionNumber Number = "b"/>
                <label className = "BodyText">Choice B</label>
            </div>
        </div>
    )
}
