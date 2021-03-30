import React, { createContext, useReducer } from "react";
import Reducer from "./reducer.js";

const initialState = {
  questionaireName: "",
  questionaireDescription: "",
  respondent_code_format: {
    format: "",
    description: "",
    example_usage: "",
  },
  qid: "",
  created_date: "",
  public_key: "",
  selected_section: "",
  sections: [],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
