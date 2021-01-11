import React from 'react'
import "./More.css"
import SlideShow from './SlideShow'
const More = (props) => {
    const business=props.location.state.business
    const entertainment=props.location.state.entertainment
    return (
        <div className="more">
            <div className="more__section">
                {/* Entertainment */}
                    <SlideShow news={entertainment} heading="Entertainment"/>
                {/* Business */}
                    <SlideShow news={business} {...business} heading="Business"/>
            </div>
        </div>
    )
}

export default More
