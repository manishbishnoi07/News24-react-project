import React, {useRef } from 'react'
import "./Option.css"
const Option = ({setCountry}) => {
    const ref=useRef(null)
    const selectCountry=(e)=>{
        setCountry(e.target.value)
        ref.current.size=1;
        ref.current.blur();
        ref.current.className=""
    }
    const changeHeight=()=>{
        if(window.outerWidth<=600){
            ref.current.size=5;
            ref.current.className="activeSelect"
        }
    }
    return (
        <div className="optionContainer">
            <h5>Select Country :</h5>
            <div className="options">
                <select defaultValue="in" ref={ref} onBlur={selectCountry}  onFocus={changeHeight} onChange={selectCountry}>
                    <option value="au">Australia</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="cn">China</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="in" >India</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="pk">Pakistan</option>
                    <option value="ru">Russia</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
            </div>
        </div>
    )
}

export default Option
