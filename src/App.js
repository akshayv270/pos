import React from 'react'
import { connect } from 'react-redux'

//import LoginForm from './LoginForm'
import LoginForm from './Login/LoginForm'
//import SecretPage from './SecretPage'
import SecretPage from './Login/SecretPage'

const App = ({ isLoggedIn, pendingLogin, user, onSubmit, onLogout }) => (
  <>
    {!isLoggedIn && <LoginForm pendingLogin={pendingLogin} onSubmit={onSubmit} /> || <SecretPage onLogout={onLogout} />}
    {pendingLogin && <p style={{ textAlign: 'center' }}>Please wait...</p>}
  </>
)

const mapStateToProps = ({ isLoggedIn, pendingLogin, user }) => ({ isLoggedIn, pendingLogin, user })

export default connect(mapStateToProps)(App)