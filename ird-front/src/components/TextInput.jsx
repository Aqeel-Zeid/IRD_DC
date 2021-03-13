import React from 'react'

export default function TextInput({ ClassName, Text, Label }) {
    return (
        <div>

            <label>{Label}</label>

            <Text className={ClassName} placeholder="Sample Text"/>
        </div>
    )
}
