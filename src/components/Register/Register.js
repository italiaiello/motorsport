import React, { useState } from 'react'

const Register = ({ onRouteChange }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onNameChange = e => { setName(e.target.value) }
    const onEmailChange = e => { setEmail(e.target.value) }
    const onPasswordChange = e => { setPassword(e.target.value) }

    const onSubmitRegister = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            onRouteChange('home')
        })
        .catch(err => console.log(err))
    }

    const onEnterPress = (e) => {
        if (e.code === 'Enter') {
            onSubmitRegister()
        }
    }

    return (
        <section id="register" className="form">
            <h1>Register</h1>
            <form onKeyPress={onEnterPress}>
                <input name="name" type="text" placeholder="Enter name..." onChange={onNameChange} />
                <input name="email" type="text" placeholder="Enter email..." onChange={onEmailChange} />
                <input name="password" type="password" placeholder="Enter password..." onChange={onPasswordChange} />
                <button onClick={onSubmitRegister}>Register</button>
            </form>
            <p onClick={() => onRouteChange('signin')}>Sign In</p>
        </section>
    )
}

export default Register