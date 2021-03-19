import React from 'react'
import NewQuestionaireButton from '../NewQuestionaireButton'
import QCard from '../QCard'
import QCardArray from '../QCardArray'

export default function QExplorer() {
    return (
        <div>
            <NewQuestionaireButton/>
                <h1>Drafts</h1>
            <QCardArray/>
        </div>
    )
}
