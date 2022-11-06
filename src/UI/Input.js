import { useReducer } from "react"
import "./Input.css"
import {useState,useEffect} from "react"
import { useRef } from "react"
// props
// type = number,text,password,email,select
// name = name of the field
// label
//placeholder
//invalid text
//pos = indicates which is the position of the input element in the page
// updateValidity (pos,current_value)
// use updavalidty from parent element to get the output value of the form elements
// add list of options prop for select element
const Input = (props)=>{
    let hide = {
        display : 'inline-block'
    };
    const [inputState,setInputState] = useState('')
    const [value,setValue] = useState('');
    const [isFocused,setIsFocused] = useState(false);
    const [isValid,setIsValid] = useState(true);
    const [hidePlaceHolder,setHidePlaceHolder] = useState({
        display : 'inline-block'
    })
    const onChangeHandler = (event)=>{
        if(props.type==='number')
        {
            setValue(parseFloat(event.target.value))
        }
        else{
            setValue(event.target.value)
        }
        checkValidity(props.min,props.max,event.target.value)
        props.updateValidity(props.pos,props.checkValidity(event.target.value))
        setIsValid(props.checkValidity(event.target.value))
        props.updateValue(props.pos,event.target.value)
       console.log(event.target.value)
    }
    const checkValidity= (min,max,value)=>{
       if(props.type === 'number')
        if(isNaN(value))
        {
            setIsValid(false)
        }
        else if(parseFloat(value)>=min && parseFloat(value)<=max)
        {
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    let content = useRef();
    let temp;
    if(props.type === 'number')
    {
        temp = 
        <input
        type = "number"
        ref = {content}
        id = {props.name}
        name = {props.name}
        value = {value}
        className = {!isValid&& !isFocused?'invalid':''}
        onChange = {onChangeHandler}
        ></input>
    }
    else if(props.type === 'text')
    {
        temp = 
                <input
                type = "text"
                ref = {content}
                id = {props.name}
                name = {props.name}
                value = {value}
                className = {!isValid&& !isFocused?'invalid':''}
                onChange = {onChangeHandler}
                ></input>
    }
    else if(props.type == 'email')
    {
        temp = 
        <input
        type = "email"
        ref = {content}
        id = {props.name}
        name = {props.name}
        value = {value}
        className = {!isValid&& !isFocused?'invalid':''}
        onChange = {onChangeHandler}
        ></input>

    }
    else if(props.type === 'password')
    {    
        temp = 
        <input
        type = "password"
        ref = {content}
        id = {props.name}
        name = {props.name}
        value = {value}
        className = {!isValid&& !isFocused?'invalid':''}
        onChange = {onChangeHandler}
        ></input>

    }
    else if(props.type==='select')
    {
        temp = 
        <div className = 'select-wrapper'>
        <select
        name = {props.name}
        id = {props.name}
        value = {value}
        className = {'custom-select'}
        onChange = {onChangeHandler}
        >
            {props.options.map(ele=>{
                return <option value = {ele}>{ele}</option>
            })}
        </select>
        </div>

    }
    else{
       temp = (<div>Invalid Props sent to Input Element</div>)
    }
    useEffect(()=>{
        if(props.type==='select')
        {
            return
        }
        content.current.addEventListener('focus',(event)=>{
            if(document.activeElement===event.target)
            {
                setIsFocused(true)
         
                hide = {
                    display: 'inline-block',
                    backgroundColor : props.bgcolor
                }
                setHidePlaceHolder(hide);
            }
        })
        content.current.addEventListener('focusout',(event)=>{
            if(value || value === 0 || value ===' '){
                hide = {
                    display: 'none',
                    backgroundColor : props.bgcolor
                }
                setHidePlaceHolder(hide);
                setIsFocused(false)
            }
            else{
               
                hide = {
                    display : 'inline-block',
                    backgroundColor : props.bgcolor
                }
                setHidePlaceHolder(hide);
                setIsFocused(false)
            }
            
            
              
        })
              
    },[value])
    if(props.type == 'select')
    {
        return temp
    }


    return (
        <div className = "form-input">
            <label htmlFor = {props.name} className = "plabel">{props.label}</label>
            <div className = "input-box">
            <div 
            className = {!isFocused ? 'place-holder' : 'place-holder on-focus' } 
            style = {hidePlaceHolder}
            onClick={()=>{
                content.current.focus();
            }}
            >
               {props.placeholder}
            </div>
            {temp}
            </div>
            <div className = 'invalid-text'>
                {!isValid && props.invalidText}
            </div>
        </div>
        )
}
export default Input;