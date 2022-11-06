import react from "react"
import Input from "../UI/Input";
import "./Login.css"
import Card from "../UI/Card/Card";
import Button from "../UI/Button"
const Login = ()=>{

    return(<div className = 'login-card'>
        <Input invalidText = "please enter an valid email"
        type = "email"
        placeholder = "Email"
        name = "email"
        label = "Email"
        bgcolor = "ghostwhite"
        >
        </Input>
        <Input
        invalidText = "please enter an valid password must be more than 4 digits"
        type = "password"
        placeholder = "Password"
        name = "password"
        label = "Password"
        bgcolor = "ghostwhite"
        >
        
        
        
        </Input>
        <Button>Log In</Button>
    </div>)


}
export default Login;