import React, { useState, useEffect } from "react";
import QuestionNumber from "./QuestionNumber";

export default function ChoiceAnswerComponent(props) {
  const [choices, setChoices] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(0);

  useEffect(() => {
    let tempChoices = [];

    props.Choices.forEach((choice, index) => {
      console.log(choice);
      tempChoices.push(
        <div
          key={index}
          className={
            index === selectedChoice ? "Choice SelectedChoice" : "Choice"
          }
          onClick={() => {
            setSelectedChoice(index);
          }}
        >
          <QuestionNumber Number={index + 1} />
          <label className="BodyText">{choice.choice_name}</label>
        </div>
      );
    });

    setChoices(tempChoices);
  }, [props.Choices.length]);

  useEffect(() => {
    let tempChoices = [];

    props.Choices.forEach((choice, index) => {
      console.log(choice);
      tempChoices.push(
        <div
          key={index}
          className={
            index === selectedChoice ? "Choice SelectedChoice" : "Choice"
          }
          onClick={() => {
            setSelectedChoice(index);
          }}
        >
          <QuestionNumber Number={index + 1} />
          <label className="BodyText">{choice.choice_name}</label>
        </div>
      );
    });

    setChoices(tempChoices);
  }, [selectedChoice]);

  return <div>{choices}</div>;
}
