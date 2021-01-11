import React from 'react'
import "./SlideShowCard.css"

const SlideShowCard = ({singleNews}) => {
    const {url,urlToImage,title}=singleNews
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="slideShowCard"> 
                <div className="slideShowCard__upper">
                    <img src={urlToImage} alt="news"/>
                </div>
                <div className="slideShowCard__bottom">
                    <h6>{title}</h6>
                </div>
            </div>
        </a>
    )
}

export default SlideShowCard
 