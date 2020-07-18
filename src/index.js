import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

import 'tachyons'
import './index.css'

// Utils
import * as serviceWorker from './serviceWorker'

// Routes
import Routes from './routes/Routes'

const cache = new InMemoryCache()

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
	)

	if (networkError) 
		console.log(`[Network error]: ${networkError}`)
})
const link = ApolloLink.from([
  errorLink,
  createHttpLink({ uri: 'http://localhost:4000' })
])

const client = new ApolloClient({
	cache,
	link
})

ReactDOM.render(
  <React.StrictMode>
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
