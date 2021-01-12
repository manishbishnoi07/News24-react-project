import React,{useEffect, useRef, useState} from 'react'
import "./Carousel.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from 'react-loading-skeleton';

const Carousel = ({worldNewsData,loading}) => {
    const [number,setNumber]=useState(1)
    const styleRef=useRef(null)
    const prevPhoto=()=>{
        if(styleRef ){
            if(number===1){
                styleRef.current.style.transform=`translateX(${-(worldNewsData.length-1)*100}%)`
                setNumber(worldNewsData.length)
                return
            }
            styleRef.current.style.transform=`translateX(${-(number-2)*100}%)`
            setNumber(prevNumber=>prevNumber-1)
        }
    }
    
    const nextPhoto=()=>{
        if(styleRef){
            if(number>=worldNewsData.length){
                styleRef.current.style.transform=`translateX(0%)`
                setNumber(1)
                return
            }
            styleRef.current.style.transform=`translateX(${-number*100}%)`
            setNumber(prevNumber=>prevNumber+1)
        }
    }

  
    useEffect(()=>{
        const timer = setInterval(()=>{
            if(styleRef){
                if(number>=worldNewsData.length){
                    styleRef.current.style.transform=`translateX(0%)`
                    setNumber(1)
                    return
                }
                styleRef.current.style.transform=`translateX(${-number*100}%)`
                setNumber(prevNumber=>prevNumber+1)
            }
        },6000)
        return () => clearInterval(timer);
    })
    

    return (
        <div className="carousel">
            {loading===true?
                <Skeleton style={{height:"100%",width:"100%"}} />
            :
             <>
             <IconButton size="small" onClick={prevPhoto}>
             <NavigateBeforeIcon />  
                 </IconButton>
             <IconButton size="small" onClick={nextPhoto}>
                 <NavigateNextIcon />
             </IconButton>
             <div ref={styleRef} className="image__container" >
                 {worldNewsData.map(({image,title,description},index)=>(
                     <div className='slide' key={index}>
                         <img className="carousel__img" src={image} alt="news"/>
                         <div className="content">
                             <h4>{title}</h4> 
                         </div> 
                     </div>        
                 ))}
             </div>
         </>
               
        }
        </div>
    )
}

export default Carousel
