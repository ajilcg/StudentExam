import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddingCourse = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate=useNavigate();
    const[formData,setForm]=useState({
        title: "",
        description: " "
         
    });
   
    const handlChange=(e)=>{
        setForm({...formData,[e.target.name]:e.target.value});
        console.log(formData);
    }
  const clickAll=async (e)=>{
    e.preventDefault();

    const response=await axios.post('https://localhost:7082/api/Course',formData)
   setSuccess('Data submitted successfully!');
   navigate('/coursetGrid');
   setError(''); // Clear previous error, if any
   console.log('Response:', response.data);
  }
  return (
  
<>
<form onSubmit={clickAll}>
  <h1>Add New Course</h1><br>
  </br>
           <label htmlFor='title'>Course Title</label>  &nbsp;
         <input id='title' name='title' onChange={handlChange}  type='text'></input> 
    &nbsp;  &nbsp;
     <label htmlFor='description'>Description</label>    &nbsp;
    <input id='description' name='description' onChange={handlChange}  type='text'></input>  &nbsp;
     <button  className='btn btn-primary' type='submit'>Add </button>
     </form>
   </>  
  )
}
