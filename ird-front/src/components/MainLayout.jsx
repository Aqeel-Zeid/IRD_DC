import React from 'react'
import SideBar from '../components/Sidebar'
import Header from '../components/Header'


export default function MainLayout(props) {
    return (
        <div className="MainContainer">
            <div className="MainContainerSideBar">
                <SideBar />
            </div>
            <div className="MainContainerHeader" >
                <Header Title = "Tile" Description = "Description"   />
            </div>
            
            <div className="MainContainerBody">
                {
                   props.children
                }
            </div>
        </div>
    )
}
