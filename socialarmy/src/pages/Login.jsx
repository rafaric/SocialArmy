import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import './login.css'

const Login = () => {
  return (
    <div className='container-forms'>
      <h1>Social Army</h1>
      <h2>La Red Social para los y las ARMY!</h2>
      <LoginForm />
    </div>
  )
}

export default Login