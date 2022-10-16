import "./Modal.css"
import Card from "./Card"
import Button from "./Button"
import {useNavigate} from 'react-router-dom'
const Modal = (props)=>{
    let navigate = useNavigate();
    return(
        <div className = 'modal'>
            {props.children}
            <br></br>
        <Button onClick = {()=>{
          window.location.reload()
        }}>
            Exit
        </Button>
        </div>
        
        )
}
export default Modal;