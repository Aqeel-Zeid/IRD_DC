import React from 'react'
import DefaultIcon from "../Assets/library.svg"

export default function BigIconButton(props) {


    return (
        <div className = "BigIconButtonContainer">
            <img src = {props.Icon} alt = { props.IconDescription}/>
            <h3>{props.Label}</h3>
            <label className = "TitleDescription">{ props.Description }</label>
        </div>
    )
}
