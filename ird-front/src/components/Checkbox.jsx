import React from 'react'

export default function Checkbox({ ClassName, Text, ClassNameLabel }) {
    return (
        <form>
            <p>
                <input className={ClassName} type="radio" checked="true" />
                    <label className={ClassNameLabel} >{Text}</label>
            </p>
        </form>



    )
}