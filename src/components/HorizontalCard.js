import React from 'react'
import "./HorizontalCard.css"
const HorizontalCard = (props,ref) => {
    return (
        <div className={`horizontalCard ${props.className}`}>
            <div ref={ref} className="horizontalCard__leftPart">
                <img src={props.image} alt='news'/>
            </div>
            <div className="horizontalCard__rightPart">
                    <h3>{props.title}</h3>
                    {props.flag && <a href={props.url}  target="_blank" rel="noopener noreferrer">Read More</a>}
                    <p className="date">{props.publishedAt}</p>
            </div>
        </div>
    )
}

export default React.forwardRef(HorizontalCard)
