// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import { AuthProvider } from '../utils/Auth.js'

// Views
import views from '../components'

const Routes = () => (
	<AuthProvider>
		<Switch>
			<Route exact path="/login" component={views.LoginPage}/>
			<Route exact path="/register" component={views.RegisterPage}/>

			<PrivateRoute path="/">
				<views.App>
					<Route path="/create" component={views.CreatePage}/>
					<Route path="/" component={views.ListPage}/>
		    	</views.App>
			</PrivateRoute>
		</Switch>
	</AuthProvider>
);

export default Routes