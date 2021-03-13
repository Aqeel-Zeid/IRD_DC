import React from 'react'
import QCard from './QCard'

export default function QCardArray() {
    return (
        <div className = "QCardArrayContainer">
            <QCard QuestionaireName = "Test Questiannaire 1" Date = { new Date().toLocaleDateString()}/>
            <QCard QuestionaireName = "Test Questiannaire 2" Date = { new Date().toLocaleDateString()}/>
            <QCard QuestionaireName = "Test Questiannaire 3" Date = { new Date().toLocaleDateString()}/>
        </div>
    )
}
