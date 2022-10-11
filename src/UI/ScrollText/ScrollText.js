import React, { useEffect, useReducer ,useCallback} from "react";
import "./ScrollText.css"
import {useState} from 'react'
let j = 0;
let i = 0;

const ScrollText = (props)=>{
    let wordsList = props.text;
    const reducer = (state,action)=>{
        if(action.type === 'CHANGE')
        {
            return action.value
        }
    }
    const [state,dispatch] = useReducer(reducer," web developer")
    useEffect(()=>{
        const wordChanger = setInterval(()=>{
            if(j=== wordsList.length-1)
            {
                dispatch({type : 'CHANGE',value : wordsList[j]})
                j = 0;
            }
            else{
                dispatch({type : 'CHANGE',value : wordsList[j]})
                j++;
            }
        },1000)
    },[])
        return(
            <div className="ScrollText">
            {state}
            </div>
        )    

}

export default ScrollText;