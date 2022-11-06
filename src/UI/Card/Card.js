import React from "react";
import "./Card.css"
/*
Two types 
Simple add prop type = 'simple' to get it
  returns a normal card with children inside it
Complex (default)
returns card with a link and possibliity add image
  props
  imgsrc,header,text,link,onClick
*/
const Card = (props)=>{
    let image = null;
    if(props.type ==='simple')
    {
        return <div className = 'Card'>{props.children}</div>
    }
    if(props.imgsrc)
    {
        image = <img className = "CardImage" src = {props.imgsrc}></img>
    }
    return(
        <a href = {props.link} className = 'card-a' onClick = {props.onClick}>
        <div className="Card">
        <div className="CardHeader">
        {props.header}
        </div>
        <div className ='card-content'>
        {image}
        <br></br>
        {props.text}
        <br></br>
        </div>
       
        </div>
        </a>
       
    )

}
export default Card;