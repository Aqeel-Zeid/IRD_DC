import React from 'react'
import TextInput from '../TextInput';
import ButtonMain from '../ButtonMain';
import formatImage from './Assets/respondentDescription.svg';
import { Link } from 'react-router-dom';

export default function QRespondentFormat() {
    return (
        <div className="RespondentFormatContainer">
            <div className="RespondentFormatLeft">
                <label style={{ fontSize: "20px", fontWeight: "bold" }} >Format of the Respondent Code</label>
                <img style={{ width: "100%", marginTop: "24px" }} src={formatImage} alt="Norway" />
                <div style={{ marginTop: 80 }}>
                    <TextInput ClassName="TextInput" Label="Type The Format" InputType="input" PlaceHolder="AAA-999-AAA" ></TextInput>
                </div>
            </div>
            <div className="RespondentFormatRight">
                <TextInput ClassName="TextArea" Label="Description on how to use it" InputType="textArea" PlaceHolder="Description" ></TextInput>
                <div >
                    <TextInput ClassName="TextInput" Label="Example of usage" InputType="input" PlaceHolder="Example" ></TextInput>
                </div>
                <div style={{ display: "flex",  justifyContent: "flex-end" }}>
                    <Link to="/CQ/QuestionaireEditor">
                        <ButtonMain ClassName="ButtonPrimary" Text="Save"></ButtonMain>
                    </Link>
                    <Link to = "/CQ/SelectRespondentCode">
                        <ButtonMain ClassName="ButtonSecondary" Text="Back"></ButtonMain>
                    </Link>
                </div>
                <div style={{ marginTop: 80 }}>
                    
                </div>
            </div>
        </div>
    )
}
