import React from "react";
import "./Backdrop.css"
const Backdrop = (props)=>{
    if(props.on)
    {
        return(
            <div className="Backdrop" onClick = {props.off}></div>
        )
    }
    else{
        return(<div></div>)
    }

}
export default Backdrop;