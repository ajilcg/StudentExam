import React from 'react'

 


export const Dashboard = () => {
  return (
   <>
<h1>
    Student 
</h1>
   <div className='row'>
   <div className='col-sm'>
 <div class="card">
   <div class="container">
    <h4><b>Student</b></h4>
    <a href='/addStudent' style={{cursor:'pointer'}}>Add Student</a><br></br>
    <a href='/studentGrid' style={{cursor:'pointer'}}>View Student</a>

  </div>
</div>
</div>
<div className='col-sm'>
<div class="card">
   <div class="container">
    <h4><b>Course</b></h4>
    <a href='/addCourse' style={{cursor:'pointer'}}>Add Course</a><br></br><br></br>
    <a href='/coursetGrid' style={{cursor:'pointer'}}>View Course</a>

  </div>
  </div>

</div>

<div className='col-sm'>
<div class="card">
   <div class="container">
    <h4><b>Enrollemnt</b></h4>
    <a a href='/enrollment'>Go to Enrollemnt</a>

 
  </div>
  </div>

</div>
</div>
   </>
  )
}
