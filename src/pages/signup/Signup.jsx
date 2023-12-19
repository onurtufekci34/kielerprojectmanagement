import './Signup.css'
import {useState} from 'react'

export default function Signup() {

  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [thumbnail,setThumbnail] = useState(null)



  return (
    <form className='auth-form'>
    <h2>Signup Page</h2>
    <label>
      <span>Email:</span>
      <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
    </label>
    <label>
      <span>Password:</span>
      <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
    </label>
    <label>
      <span>Username:</span>
      <input type="text" required value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
    </label>
    <label>
      <span>Profile Photo:</span>
      <input type="file" required />
    </label>
    <button className='btn'>Signup</button>
  </form>
  )
}
