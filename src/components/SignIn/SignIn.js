import React, { useState } from 'react'

const SignIn = ({ onRouteChange }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = e => { setEmail(e.target.value) }
    const onPasswordChange = e => { setPassword(e.target.value) }

    const saveAuthTokenInSession = (token) => {
        window.sessionStorage.setItem("token", token)
    }

    const onSubmitSignIn = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId && data.success) {
                saveAuthTokenInSession(data.token)
                fetch(`http://localhost:3000/profile/${data.userId}`, {
                    method: 'get',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                    }
                })
                .then(response => response.json())
                .then(user => {
                    if (user && user.email) {
                        console.log(user)
                        onRouteChange('home')
                    }
                })
            }
        })
        .catch(err => console.log(err))
    }

    const onEnterPress = (e) => {
        if (e.code === 'Enter') {
            onSubmitSignIn()
        }
    }

    return (
        <section id="signIn" className="form">
            <h1>Sign In</h1>
            <form onKeyPress={onEnterPress}>
                <input className="formInput" type="text" name="email" placeholder="Enter email..." onChange={onEmailChange} />
                <input className="formInput" type="password" name="password" placeholder="Enter password..." onChange={onPasswordChange} />
                <button onClick={onSubmitSignIn}>Submit</button>
            </form>
            <p onClick={() => onRouteChange('register')}>Register</p>
        </section>
    )
}

export default SignIn