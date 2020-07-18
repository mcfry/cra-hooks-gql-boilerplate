import React, { useContext } from 'react'
import { Route, Redirect} from 'react-router-dom'

import { AuthContext } from '../utils/Auth.js'

const PrivateRoute = (props) => {
	const { currentUser } = useContext(AuthContext)

	if (!currentUser) {
		return (
			<Redirect to="/login" />
		)
	}
	
	return (
		<Route {...props} />
	)
}

export default PrivateRoute