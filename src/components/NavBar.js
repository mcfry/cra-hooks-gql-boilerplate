import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import fb from '../utils/firebase.js'
import { AuthContext } from '../utils/Auth.js'

const NavBar = (props) => {
  const { currentUser } = useContext(AuthContext)

  const handleLogout = async (e) => {
    e.preventDefault()
    
    try {
      await fb.auth().signOut()
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <nav className="flex justify-between bg-gold bb b--white-10">
      <a href="#0" className="link white-70 hover-white no-underline flex items-center pa3">
        <svg
          className="dib h1 w1"
          data-icon="grid"
          viewBox="0 0 32 32"
          style={{"fill": "currentcolor"}}>
          <title>Menu</title>
          <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
          </path>
        </svg>
      </a>
      <div className="flex-grow pa3 flex items-center">
        {currentUser ? (
          <a href="#0" onClick={handleLogout} className="f6 link dib white dim mr3 mr4-ns">Sign Out</a>
        ) : (
          <>
            <Link to="/login" className="f6 link dib white dim mr3 mr4-ns">Login</Link>
            <Link to="/register" className="f6 link dib white dim mr3 mr4-ns">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar