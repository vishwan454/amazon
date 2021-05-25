import React from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { auth } from "./firebase"

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //redirect to homepage
            history.push("/")
        })
        .catch((e)=>
            alert(e.message)
        )
    }

    const register = (e)=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            //create the user and log in and redirect to home page
            history.push("/")
        })
        .catch(e => alert(e.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82Io_97oYZWyD8sw7QWy9V7X1ucalRIJCwm_VDLyJiJCb7FLicu9LI8qL_y8DZma2Teg&usqp=CAU" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="text" />
                    <button className="login__signInButton" onClick={login}>Sign in</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
