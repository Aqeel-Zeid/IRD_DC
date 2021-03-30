const Reducer = (state, action) => {
  //console.log(state,action)
  //console.log(action);

  switch (action.type) {
    case "SET_questionaireName":
      return {
        ...state,
        questionaireName: action.payload,
      };
    case "SET_questionaireDescription":
      return {
        ...state,
        questionaireDescription: action.payload,
      };
    case "SET_created_date":
      return {
        ...state,
        created_date: action.payload,
      };
    case "SET_qid":
      return {
        ...state,
        qid: action.payload,
      };
    case "SET_respondent_code_format__format":
      return {
        ...state,
        respondent_code_format: {
          ...state.respondent_code_format,
          format: action.payload,
        },
      };
    case "SET_respondent_code_format__description":
      return {
        ...state,
        respondent_code_format: {
          ...state.respondent_code_format,
          description: action.payload,
        },
      };
    case "SET_respondent_code_format__example_usage":
      return {
        ...state,
        respondent_code_format: {
          ...state.respondent_code_format,
          example_usage: action.payload,
        },
      };
    case "ADD_question":
      //   let sectionIndex = action.payload.selectedSection;
      // let sections = [...state.sections];
      // let questions_2 = [...sections[state.selected_section].questions , action.payload];
      // questions_2.push(action.payload);
      // sections[state.selected_section].questions = questions_2;

      let sections = [...state.sections];

      let selectedSection = state.sections[state.selected_section];
      selectedSection = {
        ...selectedSection,
        questions: [
          ...state.sections[state.selected_section].questions,
          action.payload,
        ],
      };

      sections[state.selected_section] = selectedSection;

      return {
        ...state,
        sections: sections,
      };

    case "ADD_SECTION":
      const newSection = {
        ...action.payload,
        is_skip_logic: false,
        questions: [],
      };

      let sections_2 = [...state.sections, newSection];

      return {
        ...state,
        sections: sections_2,
      };

    case "SET_selected_section":
      return {
        ...state,
        selected_section: action.payload,
      };

    case "SET_QUESTIONAIRE":
      return action.payload;

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

// const initialState = {
//     "questionaireName": "",
//     "questionaireDescription": "",
//     "respondent_code_format" : {
//         format : "",
//         description : "",
//         example_usage : ""
//     },
//     "qid": "",
//     "created_date": "",
//     "public_key" : "",
//     "sections": [
//       {
//         "section_name": "",
//         "is_skip_logic": "",
//         "description": "",
//         "order": "",
//         "questions": [
//           {
//             "label": "",
//             "type": "",
//             "order": "",
//             "is_multi_part": "",
//             "column_variable_name": "",
//             "answer_hint": "",
//             "not_mandotary": "",
//             "no_special_chars": "",
//             "min_value": "",
//             "max_value": "",
//             "choices": [
//               {
//                 "choice_name": "",
//                 "value": ""
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
