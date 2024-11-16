import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import StudentGrid from './Components/StudentGrid.jsx'
import { AddingStudent } from './Components/AddingStudent.jsx'
import { AddingCourse } from './Components/AddingCourse.jsx'
import { CourseGrid } from './Components/CourseGrid.jsx'
import Enrollment from './Components/Enrollment.jsx'
import { Dashboard } from './Components/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Dashboard></Dashboard>}></Route>

    <Route path='/addStudent' element={<AddingStudent></AddingStudent>}></Route>
    <Route path='/studentGrid' element={<StudentGrid></StudentGrid>}></Route>
    <Route path='/addCourse' element={<AddingCourse></AddingCourse>}></Route>
    <Route path='/coursetGrid' element={<CourseGrid></CourseGrid>}></Route>
    <Route path='/enrollment' element={<Enrollment></Enrollment>}></Route>


   </Routes>
   </BrowserRouter>
    <App />
  </StrictMode>,
)
