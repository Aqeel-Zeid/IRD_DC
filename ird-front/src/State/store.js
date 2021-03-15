import React, {createContext, useReducer} from "react";
import Reducer from './reducer.js'


const initialState = {
    "questionaireName": "",
    "description": "",
    "respondent_code_format" : "",
    "qid": "",
    "created_date": "",
    "public_key" : "",
    "sections": [
      {
        "section_name": "",
        "is_skip_logic": "",
        "description": "",
        "order": "",
        "questions": [
          {
            "label": "",
            "type": "",
            "order": "",
            "is_multi_part": "",
            "column_variable_name": "",
            "answer_hint": "",
            "not_mandotary": "",
            "no_special_chars": "",
            "min_value": "",
            "max_value": "",
            "choices": [
              {
                "choice_name": "",
                "value": ""
              }
            ]
          }
        ]
      }
    ]
  }
       

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;