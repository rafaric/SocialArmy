import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './registroForm.css'



const RegistroForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confpass, setConfpass] = useState('');
  const [fullname, setFullName] = useState('');
  const [adress, setAdress] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('masculino');
  const [telefono, setTelefono] = useState('');


  return (
    <form className='container'>
      <input 
        type='text' 
        id='fullname'
        placeholder='Ingrese su Nombre Completo'
        onChange={(e) =>setFullName(e.target.value)}
      />
      <select className='genero'  onChange={(e)=>setGender(e.target.value)}>
        <option value='' disabled selected hidden>Ingrese su genero:</option>
        <option value='masculino'>Masculino</option>
        <option value='femenino'>Femenino</option>
        <option value='otro'>Otro</option>
      </select>
      <input 
        type='text' 
        id='username'
        placeholder='Ingrese su Nombre de Usuario'
        onChange={(e) =>setUsername(e.target.value)}
      />
      <input 
        type='text' 
        id='adress'
        placeholder='Ingrese su dirección'
        onChange={(e) =>setAdress(e.target.value)}
      />
      <input 
        type='text' 
        id='phone'
        placeholder='Ingrese su teléfono'
        onChange={(e) =>setTelefono(e.target.value)}
      />
      <input 
        type='email' 
        id='email'
        placeholder='Ingrese su email'
        onChange={(e) =>setEmail(e.target.value)}
      />
      <input 
        type='password'
        id='pass' 
        placeholder='Ingrese su contraseña'
        onChange={(e)=>setPass(e.target.value)}
        />
      <input 
        type='password2'
        id='pass2' 
        placeholder='Ingrese nuevamente la contraseña'
        onChange={(e)=>setConfpass(e.target.value)}
      />
      <button 
        className='btnlogin' 
        type='submit'
        onClick={(e)=>{
          e.preventDefault();
          console.log(email,pass)
        }}  
        >Registrarse</button>
      <p className='notregistered'>¿Ya estás registrado/a? <Link className='tologin' to='/'>Ingresa aquí!</Link></p>
    </form>
  )
}

export default RegistroForm