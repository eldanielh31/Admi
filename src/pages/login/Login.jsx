import "./login.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    let error = useSelector((state)=>state.user.error);

    const handleClick = async(e)=>{
      e.preventDefault();
      login(dispatch, { username, password })
    };

    
  return (
    <div className="screen">
        <input className="input" type="text" placeholder="Usuario" onChange={e=>setUsername(e.target.value)}/>
        <input className="input" type="password" placeholder="Contrase&ntilde;a" onChange={e=>setPassword(e.target.value)}/>
        {error && <span className="error">Algo sali&oacute; mal</span>}
        <button className="button" onClick={handleClick}>Iniciar Sesion</button>
    </div>
  )
}

export default Login