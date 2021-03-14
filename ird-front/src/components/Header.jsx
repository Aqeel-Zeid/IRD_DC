import React from 'react'

export default function Header({Title,Description}) {
    return (
        <div style = {{marginTop:"16px"}}>
            <h1>{Title}</h1>
            <label className="TitleDescription">{Description}</label>
        </div>
    )
}
