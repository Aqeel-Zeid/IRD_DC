import React from 'react'

export default function PaginationProgress({NumberOfItems,CurrentItem}) {

    let dot_array = [];

    for (let index = 0; index < NumberOfItems ; index++) {
        
        dot_array.push(<div className = "PaginationProgressPassive" key = {index}></div>)
        
    }

    dot_array[CurrentItem - 1] = <div className = "PaginationProgressActive" key = {CurrentItem - 1}></div> 

    return (
        <div className="PaginationProgressContainer">
            {
                dot_array.map(
                    element => element
                )
            }
        </div>
    )
}
