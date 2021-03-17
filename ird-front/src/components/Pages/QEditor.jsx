import React, { useContext, useState, useEffect } from "react";
import SideBar from "../SectionSideBar";
import PlainTextAnswerComponent from "../PlainTextAnswerComponent";
import ChoiceAnswerComponent from "../ChoiceAnswerComponent";
import PlainNumberAnswerComponent from "../PlainNumberAnswerComponent"
import QuestionFormat from "../Question";
import Button from "../ButtonMain";

import { Context } from "../../State/store";
import Question from "../Question";
import { Link } from "react-router-dom";

export default function QEditor(props) {
  const [state, dispatch] = useContext(Context);

  const [selectedSection, setSelectedSection] = useState(0);

  const [questionList, setQuestionList] = useState([]);

  console.log(state)

  useEffect(() => {
    

    dispatch({type : "SET_selected_section" , payload : selectedSection })

    console.log(selectedSection , state.selected_section)

  }, [selectedSection])

  useEffect(() => 
  {

    let questionArray = [];
    state.sections[selectedSection].questions.forEach((question, index) => 
    {
          //Create answer component according to the question type
          let answerComponent = <></>;

       

      //console.log(question);
      switch (question.type) {
        case "TEXT":
          answerComponent = (
            <PlainTextAnswerComponent Placeholder={question.answer_hint} />
          );
          break;
        case "NUMBER":
          answerComponent = <PlainNumberAnswerComponent Placeholder = {question.answer_hint} />
          break;
        case "MULTIPLE_CHOICE":
          answerComponent = <ChoiceAnswerComponent Choices = {question.choices}/>
          break;  

        default:
          break;
      }

      //console.log(answerComponent)

      let questionComponent = 
        <Question
          AnswerComponent={answerComponent}
          QuestionNumber={index + 1}
          Label={question.label}
          key={index}

        />

      questionArray.push(questionComponent);
    });

    setQuestionList(questionArray);

  }, 
  [selectedSection]);

  // useEffect(() => {
  //   console.log(questionList)
  // }, [questionList.length])

  //console.log(state);

  return (
    <div className="QEditorContainer">
      <div className="QEditorSidebar">
        <SideBar SectionList = {state.sections} SelectedSection = {selectedSection} SetSelectedSection = {setSelectedSection}/>
      </div>
      <div className="QEditorQuestions">
        {
          questionList
        }
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <Link to = "/CQ/AQ/AddQuestion" >
              <Button ClassName="ButtonPrimary" Text="Add Question" />
          </Link>
        </div>

        <div style={{ marginBottom: 16 }}>
          <Button
            ClassName="ButtonPrimary"
            Text="Save Section To Library"
          ></Button>
        </div>
      </div>
    </div>
  );
}
