 import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export const CourseGrid = () => {

    const[formData,setForm]=useState([]);

 
    
    useEffect(() => { 
        fetch("https://localhost:7082/api/Course")
         .then((data) => data.json())
         .then((data) => setForm(data))
         console.log(formData);
     
     }, [] 
     ) 
    
     
  return (
    <>
      <div style={{width:'50rem'}}> 
        <h1>Course List</h1><br></br>
        <Table  striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
         </tr>
      </thead>
      <tbody>

{formData.map(item=>(
  <tr  onClick={()=>clickId(item.id)}>
  <td>{item.id}</td>
  <td>{item.title}</td> 
   <td>{item.description}</td>
 </tr>

))} 
      </tbody>
    </Table>
    </div>
    </>
  )
}
