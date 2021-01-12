import React from 'react'
import "./Sports.css"
import Card from "./Card"


const Sports = (props) => {
    const sports=props.location.state
    return (
        <div className="search">
            <div className="news__section">
                <div className="cards__section">
                {sports.map((item,index)=>(
                    <Card key={index} title={item.title} description={item.description} url={item.url} image={item.image} date={item.publishedAt}/>
                ))}                    
                </div>
            </div>
        </div>
    )
}

export default Sports
