import React from 'react'

export default function ButtonMain({ ClassName, Text }) {
    return (
        <div>
            <button className={ClassName}>{Text}</button>
        </div>
    )
}