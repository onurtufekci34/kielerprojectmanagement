import './Signup.css'
import {useState} from 'react'

export default function Signup() {

  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [thumbnail,setThumbnail] = useState(null)

  const [thumbnailError,setThumbnailError] = useState(null)

  const handleChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0];


    if(!selected){
      setThumbnailError('Please select a picture file');
      return;
    }


    if (!selected.type.includes('image')){
      setThumbnailError('Please select a picture file');
      return;
    }

    setThumbnailError(null)
    setThumbnail(selected)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(email !=='' && password!=='' && displayName!=='' && thumbnail !==null){
            console.log(email,password,displayName,thumbnail)
    }
  }



  return (
    <form className='auth-form' onSubmit={handleSubmit}>
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
      <input type="file" required  onChange={handleChange}/>
      {thumbnailError && <div className='error'>{thumbnailError}</div>}
    </label>
    <button className='btn'>Signup</button>
  </form>
  )
}
