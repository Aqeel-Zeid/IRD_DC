import React from 'react'

export default function PlainTextAnswerComponent(props) {
    return (
        <div>
            <input type="text" placeholder = {props.Placeholder} />
        </div>
    )
}

