import React, { useState } from 'react'
import { Link, Redirect} from "react-router-dom"
const Login = (props) => {
    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	

	const redirect = () => {
        console.log('clicked')
        localStorage.setItem('user', true)
        return <Redirect to='/main' />
	}
    return (
		<div>
			<div className="Login-form">
				<input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
				<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				<Link to='/main' onClick={redirect}>Login</Link>
			</div>
		</div>
	)
}

export default Login