import './Login.css'
import {useState} from 'react'






export default function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
   
    
  }


  return (
    <form className='auth-form' onSubmit={handleSubmit}>
    <h2>Login Page</h2>
    <label>
      <span>Email:</span>
      <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
    </label>
    <label>
      <span>Password:</span>
      <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
    </label>
    
    <button className="btn">Login</button>
  </form>
  )
}

