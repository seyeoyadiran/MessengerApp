import "./login.css";
import { useState } from "react";
import Avatar from "../imgs/ava.png";
import { toast } from "react-toastify";

const Login = () => {

    const [avatar, setAvatar] = useState ({
        file: null,
        url: ""
    })

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e =>{
            e.preventDefault()
    }


        return (
        <div className='login'> 
        <div className="item">
            <h2> Welcome Back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Email" name="email"/>
                <button> Sign In</button>
            </form>
        </div>
        <div className="sepafrator"></div>
        <div className="item">
        <h2> Create An Account</h2>
            <form>
                <label htmlFor="file"> 
                    <img src={avatar.url ||  Avatar }alt=""  />
                    Upload an Image </label>
                 <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>   
                <input type="text" placeholder="Username" name="username"/>
                <input type="password" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button> Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Login 