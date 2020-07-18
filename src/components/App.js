import React from 'react'
import NavBar from './NavBar.js'

const App = React.memo((props) => {
  return (
    <div className="app">
      <NavBar/>
      <div className="app-content">
        {props.children}
      </div>
    </div>
  )
})

export default App