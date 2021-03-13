import React from 'react'

export default function QuestionDivider({ ClassName, ClassNameDividerLabel }) {
    return (
        <div className={ClassNameDividerLabel}>
            <hr className={ClassName}></hr>
            <label>OR</label>
            <hr className={ClassName}></hr>
        </div>
    )
}