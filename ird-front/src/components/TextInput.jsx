import React from 'react'

export default function TextInput({ ClassName, Label, InputType, PlaceHolder }) {
    return (
        <div>

            <label>{Label}</label>
            <InputType className={ClassName} placeholder={PlaceHolder}/>
        </div>
    )
}
