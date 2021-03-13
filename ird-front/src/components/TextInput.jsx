import React from 'react'

export default function TextInput({ ClassName, Text, Label, InputType }) {
    return (
        <div>

            <label>{Label}</label>]
            <InputType className={ClassName} placeholder="Sample Text" value={Text}/>
        </div>
    )
}
