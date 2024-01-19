import './Create.css'
import { useState } from 'react'
import Select from 'react-select'

export default function Create() {

  const [name,setName]=useState('')
  const [details,setDetails]=useState('')
  const [date,setDate]=useState('')
  const [category,setCategory]=useState('')
  const [projectUser,setProjectUser]=useState([])


  const categories = [
    {value:'desktop', label:'Desktop App'},
    {value:'web', label:'Web App'},
    {value:'mobile', label:'Mobile App'}
  ]

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,details,date,category);
  }

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input required type="text" onChange={(e)=>setName(e.target.value)} value={name}
          />
        </label>

        <label>
          <span>Project Description:</span>
          <textarea required type="text" onChange={(e)=>setDetails(e.target.value)} value={details}
          ></textarea>
        </label>

        <label>
          <span>End Date:</span>
          <input required type="date" onChange={(e)=>setDate(e.target.value)} value={date}
          />
        </label>

        <label>
          <span>Category:</span>
          <Select placeholder="Select" options={categories} onChange={(option) => setCategory(option)}/>
        </label>

        <label>
          <span>Project Users:</span>
        </label>

        <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
