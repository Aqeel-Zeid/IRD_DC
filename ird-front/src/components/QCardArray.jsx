import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import QCard from "./QCard";

import { Context } from "../State/store";

export default function QCardArray() {
  const [state, dispatch] = useContext(Context);

  const [qCards, setQCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/GetAllQuestionaires")
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => {
        let QCards = [];

        json.map((questionaire) => {
          console.log(questionaire);

          QCards.push(
            <QCard
              QuestionaireName={questionaire.questionaireName}
              Date={new Date(questionaire.created_at).toLocaleDateString()}
              key={questionaire.qid}
              OnClick={(e) => {
                dispatch({
                  type: "SET_QUESTIONAIRE",
                  payload: questionaire,
                });
              }}
            />
          );
        });

        setQCards(QCards);
      }) //print data to console
      .catch((err) => console.log("Request Failed", err)); // Catch errors
  }, []);

  useEffect(() => {
    console.log(qCards);
  }, [qCards]);

  return <div className="QCardArrayContainer">{qCards}</div>;
}
