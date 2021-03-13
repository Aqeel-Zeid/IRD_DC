import React from 'react'
import TextInput from '../TextInput';
import ButtonMain from '../ButtonMain';

export default function QGeneralInfo() {
    return (
        <div style = {{ marginTop: 40 }}>
            <TextInput ClassName = "TextInput" Label = "Questionnaire Name" InputType = "input" PlaceHolder = "Enter Questionnaire Name" ></TextInput>
            <br/>
            <br/>
            <br/>
            <TextInput ClassName = "TextArea" Label = "Description" InputType = "textArea" PlaceHolder = "Enter Description" ></TextInput>
            <br/>
            <br/>
            <div style={{marginTop: 80}}>
            <ButtonMain ClassName = "ButtonPrimary" Text = "Next"></ButtonMain>
            <div style = {{ alignSelf: "center" }}>
            </div>
            </div>
        </div>
    )
}
