import React from 'react'
import DefaultIcon from "../Assets/library.svg"
import {Link} from "react-router-dom"

export default function BigIconButton(props) {


    return (
        <div className = "BigIconButtonContainer">
            <Link to = {props.LinkTo}>
                <img src = {props.Icon} alt = { props.IconDescription}/>
                <h3>{props.Label}</h3>
                <label className = "TitleDescription">{ props.Description }</label>
            </Link>
        </div>
    )
}
