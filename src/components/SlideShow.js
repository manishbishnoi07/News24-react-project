import React,{useRef} from 'react'
import "./SlideShow.css"
import SlideShowCard from './SlideShowCard'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';



const SlideShow = ({heading,news}) => {
    const slide=useRef(null)

    const nextNews=()=>{
        if(slide){
            slide.current.scrollLeft+=232
        }
    }
    const prevNews=()=>{
        if(slide){
            slide.current.scrollLeft-=232
        }
    }   

    return (
        <div className="slideShow">
            <div className="heading">
                <h2>{heading}</h2>
            </div>

            <div className="slideShow__container">
                <IconButton className="prevButton" size="small" onClick={prevNews}>
                    <NavigateBeforeIcon />  
                </IconButton>

                <div ref={slide} className="slideShow__section">
                    {news.map((singleNews,index)=>(
                        <SlideShowCard singleNews={singleNews} key={index}/>
                    ))}
                </div>
                
                <IconButton className="nextButton" size="small" onClick={nextNews}>
                    <NavigateNextIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SlideShow
