import { InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton, DropdownItem, Form } from 'react-bootstrap'

export const Enrollment = () => {
const[course,setCourse]=useState([]);
const[student,setStudent]=useState([]);

    
const ddlCourseChange=(e)=>{
    alert("asdssdf");
    alert(e.target.value);
   // setCourse(e.target.value);
}


    useEffect(() => { 
        fetch("https://localhost:7082/api/Course")
         .then((data) => data.json())
         .then((data) => setCourse(data))
      
     },  fetch("https://localhost:7082/api/Student")
     .then((data) => data.json())
     .then((data) => setStudent(data)), [] 
     ) 
   

    //  const clickAll=async (e)=>{
    //     e.preventDefault();
    
    //     const response=await axios.post('https://localhost:7082/api/Student',formData)
       
    //    console.log('Response:', response.data);
    //   }


  return (
   <>
    <Form >
        <h1>Enrollment</h1><br></br>
        <div className='row'>
        <div className='col-sm-6'>
        <DropdownButton title="Select Student"> 
        {student.map(item=>( 
            <DropdownItem>{item.name}</DropdownItem>
        ))}
      </DropdownButton>
      </div>
      <div className='col-sm-6'>
      <DropdownButton onChange={ddlCourseChange} title="Select Course"> 
        {course.map(item=>( 
            <DropdownItem >{item.title}</DropdownItem>
        ))}
      </DropdownButton><br></br>

      <button style={{width:'134px'}} className='btn btn-info'>Add</button>
      </div>

       </div>
    </Form>
   
   </>
  )
}
export default Enrollment