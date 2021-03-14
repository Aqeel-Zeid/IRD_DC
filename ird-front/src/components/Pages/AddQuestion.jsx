import React from 'react'
import QuestionDivider from '../QuestionDivider'
import BigIconButton from '../BigIconButton'
import addFile from './Assets/add_file.svg'
import libraryIcon from './Assets/library.svg'

export default function AddQuestion() {
    return (
        <div style = {{display: "flex", justifyContent: "space-around"}}>
            <BigIconButton Icon = {libraryIcon} IconDescription = "Add To Library Icon" Label = "Select From Library" Description = "Select from an already existing questions library"/>
            <QuestionDivider ClassName = "VerticalDivider" ClassNameDividerLabel = "VerticalDividerLabel" />
            <BigIconButton Icon = {addFile} IconDescription = "Create New Question Icon" Label = "Select From Library" Description = "Select from an already existing questions library"/>
        </div>
    )
}
