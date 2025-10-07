import {useEffect, useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router'

function DisplayStudent() {
  const [student,setStudent]=useState([])
  async function fetchData(){
    const res=await axios.get('http://localhost:8000/student')
    console.log('res-->',res.data)
    setStudent(res.data)
  }
  useEffect( ()=>{fetchData()} , [] )
  async function deleteData(id) {
    const res=await axios.delete(`http://localhost:8000/student/${id}/`)
    alert('deleted...')
    await fetchData()
    
  }
  return (
    <div className='container mt-3 p-3'>
      <h3 className='text-center'>Students</h3>
      <table className='table table-primary table-bordered'>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map(e=> <tr>
                              <td>{e.name}</td>
                              <td>{e.roll}</td>
                              <td>{e.marks}</td>
                              <td>
                               <NavLink to={`/update/${e.id}`} className='btn btn-warning btn-sm me-2'>update</NavLink>
                              
                                
                                <button onClick={ ()=>{deleteData(e.id)}} className='btn btn-danger btn-sm'>delete</button>
                                
                              </td>
                            </tr>                             

                       )
          }
        </tbody>
      </table>
    </div>
    
  )
}

export default DisplayStudent