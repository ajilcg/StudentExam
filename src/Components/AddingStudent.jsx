import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { forEachChild } from 'typescript';




export const AddingStudent = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate=useNavigate();
    const[formData,setForm]=useState({
      name: "",
      email: " "
         
    });
   
    const handlChange=(e)=>{
        setForm({...formData,[e.target.name]:e.target.value});
        console.log(formData);
    }
  const clickAll=async (e)=>{
    e.preventDefault();

    const response=await axios.post('https://localhost:7082/api/Student',formData)
   setSuccess('Data submitted successfully!');
   navigate('/studentGrid'); 
   setError(''); // Clear previous error, if any
   console.log('Response:', response.data);
  }
  return (
<>
<form onSubmit={clickAll}>
  <h1>Add Student</h1><br>
  </br>
           <label htmlFor='name'>Name</label>  &nbsp;
         <input id='name' name='name' onChange={handlChange}  type='text'></input> 
    &nbsp;  &nbsp;
     <label htmlFor='email'>Email</label>    &nbsp;
    <input id='email' name='email' onChange={handlChange}  type='text'></input>  &nbsp;
     <button  className='btn btn-primary' type='submit'>Add </button>
     </form>
   </> 
)
}
