import React, { useState, useEffect, useContext } from "react";
import ButtonMain from "./ButtonMain";

import { Context } from "../State/store";
import { Link } from "react-router-dom";

export default function SectionSideBar({
  SectionList,
  SelectedSection,
  SetSelectedSection,
}) {
  const [state, dispatch] = useContext(Context);

  //SectionList = {state.sections} SelectedSection = {selectedSection}
  let classNameDefinition = "SectionSideBarItem";

  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    //console.log(state.selected_section);

    let sList = [];
    SectionList.forEach((section, index) => {
      SelectedSection === index
        ? (classNameDefinition =
            "SectionSideBarItem SectionSideBarItemSelected")
        : (classNameDefinition = "SectionSideBarItem");

      sList.push(
        <div
          className={
            index === state.selected_section
              ? "SectionSideBarItem SectionSideBarItemSelected"
              : "SectionSideBarItem"
          }
          key={index}
          onClick={() => {
            //dispatch({ type: "SET_selected_section", payload:  index  })
            SetSelectedSection(index);
            //console.log(state.selected_section, index )
          }}
        >
          {section.section_name}
        </div>
      );
    });

    setSectionList(sList);
  }, [state.selected_section]);

  useEffect(() => {
    // console.log(
    //   SectionList[0].section_name === "" ||
    //     SectionList[0].section_name === undefined
    // );
  }, [sectionList]);

  return (
    <div className="SectionSideBarContainer">
      <a
        class="ButtonPrimary"
        href={`http://localhost:4000/downloadQuestionaire/${state.questionaireName}`}
        download="questionaire"
      >
        Export Questionaire
      </a>
      {/* <ButtonMain
        Text="Export Questionaire"
        ClassName="ButtonPrimary"
        OnClickMethod={() => {
          // fetch(
          //   `http://localhost:4000/downloadQuestionaire/${state.questionaireName}`,
          //   {
          //     method: "GET",
          //   }
          // )
          //   .then((res) => {
          //     console.log("Success:", res);
          //   })
          //   .then((data) => {
          //     console.log(data  );
          //   })
          //   .catch((error) => {
          //     console.error("Error:", error);
          //   });

        

        }}
      /> */}
      {sectionList}
      <Link to="/CQ/AS/AddSection">
        <ButtonMain Text="Add Section" ClassName="ButtonPrimary" />
      </Link>
    </div>
  );
}
