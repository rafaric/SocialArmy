import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './loginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='container'>
      <input 
        type='email' 
        id='email'
        placeholder='Ingrese su email'
        onChange={(e) =>setEmail(e.target.value)}
      />
      <div className='pass'>
        <input 
          type={showPassword ? 'type' : 'password'}
          id='pass' 
          placeholder='Ingrese su contraseña'
          onChange={(e)=>setPass(e.target.value)}
        />
        {showPassword ? <VisibilityOffIcon onClick={()=> setShowPassword(!showPassword)} /> : <VisibilityIcon onClick={()=> setShowPassword(!showPassword)} />}
      </div>
      <button 
      className='btnlogin' 
      type='submit'
      onClick={(e)=>{
        e.preventDefault();
        console.log(email,pass)
      }}  
      >Ingresar</button>
      <p className='notregistered'>¿No estás registrado/a? <Link className='tologin' to='/register'>Registrate aquí!</Link></p>
    </form>
  )
}

export default LoginForm