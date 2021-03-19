import React from 'react'
import QuestionDivider from '../QuestionDivider'
import BigIconButton from '../BigIconButton'
import addFile from './Assets/add_file.svg'
import libraryIcon from './Assets/library.svg'
import { Link } from 'react-router-dom'

export default function AddQuestion() {
    return (
        <div style = {{display: "flex", justifyContent: "space-around"}}>

            <BigIconButton Icon = {addFile} IconDescription = "Create New Question Icon" Label = "Create new question" Description = "Create new question" LinkTo = "/CQ/AQ/QuestionFormat"/>
            <QuestionDivider ClassName = "VerticalDivider" ClassNameDividerLabel = "VerticalDividerLabel" />
            <BigIconButton Icon = {libraryIcon} IconDescription = "Add To Library Icon" Label = "Select From Library" Description = "Select from an already existing questions library"/>
        </div>
    )
}
