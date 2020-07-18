import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import fb from '../utils/firebase.js'
import { AuthContext } from '../utils/Auth.js'

const RegisterPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')

	const { currentUser } = useContext(AuthContext)
	if (currentUser) {
		return <Redirect to="/" />
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password === password2) {
			try {
				fb.auth().createUserWithEmailAndPassword(email, password)
			} catch(e) {
				console.log(e)
			}
		} else {
			alert("Passwords don't match")
		}
	}

	return (
		<main className="pa4 black-80">
		  <form onSubmit={handleSubmit} className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange={e => setEmail(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange={e => setPassword(e.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password Confirmation</label>
		        <input onChange={e => setPassword2(e.target.value)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password2" id="password2"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
		    </div>
		    <div className="lh-copy mt3">
		      <Link to="/Login" className="f6 link dim black db">Already have an account? Login here</Link>
		    </div>
		  </form>
		</main>
	)
}

export default RegisterPage