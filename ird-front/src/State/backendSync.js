export default function (questionaireObject) {
  console.log(questionaireObject);
  fetch("http://localhost:4000/UpdateQuestionaire", {
    method: "POST",
    body: JSON.stringify({
      updatedQuestionaire: questionaireObject,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}
