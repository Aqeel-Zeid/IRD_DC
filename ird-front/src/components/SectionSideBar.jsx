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
          onClick={() =>
            {  
                //dispatch({ type: "SET_selected_section", payload:  index  })
                SetSelectedSection(index)
                //console.log(state.selected_section, index )
            }
                
          }
        >
          {section.section_name}
        </div>
      );
    });

    setSectionList(sList);
  }, [state.selected_section]);

  useEffect(() => {}, [sectionList]);

  return (
    <div className="SectionSideBarContainer">
      {sectionList}
      <Link to = "">
          <ButtonMain Text="Add Section" ClassName="ButtonPrimary" />
      </Link>
    </div>
  );
}
