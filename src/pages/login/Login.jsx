import "./login.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});
    };
  return (
    <div className="screen">
        <input className="input" type="text" placeholder="Usuario" onChange={e=>setUsername(e.target.value)}/>
        <input className="input" type="password" placeholder="Contrasenna" onChange={e=>setPassword(e.target.value)}/>
        <button className="button" onClick={handleClick}>Iniciar Sesion</button>
    </div>
  )
}

export default Login