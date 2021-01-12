import React, { useState} from 'react'
import "./Card.css"
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import {
    FacebookMessengerShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    FacebookMessengerIcon,
    TelegramIcon,
    WhatsappIcon,
  } from 'react-share';

Modal.setAppElement("#root");

const Card = ({title,description,url,image,date}) => {
    const [open,setOpen]=useState(false)
    return (
        <div className="card">
            <div className="card__up">
                <IconButton onClick={()=> setOpen(true)} className="news__share" color="secondary">
                    <ShareIcon />           
                </IconButton>
                <Modal
                    className="modal"
                    isOpen={open}
                    onRequestClose={()=> setOpen(false)}
                    contentLabel="Example Modal"
                    style={
                        {
                            overlay:{
                                backgroundColor:'rgba(0,0,0,0.7)'
                            },
                        }
                    }
                >           
                    <div className="modal__header">
                        <h1>Share...</h1>
                        <IconButton onClick={()=> setOpen(false)} className="closeButton">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className="modal__footer">
                        <FacebookMessengerShareButton className="shareButton" url={url}  >
                            <FacebookMessengerIcon round={true} >

                            </FacebookMessengerIcon>
                        </FacebookMessengerShareButton>
                        <TelegramShareButton url={url} className="shareButton">
                            <TelegramIcon round={true}>

                            </TelegramIcon>
                        </TelegramShareButton>
                        <WhatsappShareButton url={url} className="shareButton">
                            <WhatsappIcon round={true}>

                            </WhatsappIcon>
                        </WhatsappShareButton>
                    </div>
                </Modal>

                <img src={image} alt="news pic"/>
                <div className="overlay"></div>
            </div>
            <div className="card__down">
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
                <span className="news__date">{date}</span>
            </div>
        </div>
    )
}

export default Card
