import {useEffect} from 'react'
import {useParams,useNavigate} from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function UpdateStudent() {

  const {handleSubmit,register,setValue} =useForm()
  const params=useParams()
  const nav=useNavigate()

  async function fetchData(){
    const res=await axios.get(`http://localhost:8000/student/${params.id}/`)
    setValue('roll', res.data.roll)
    setValue('name', res.data.name)
    setValue('marks', res.data.marks)
  }

  useEffect( ()=>{fetchData() }, [] )


  async function updateData(data){
    const res =await axios.put(`http://localhost:8000/student/${params.id}/`, data)
    nav('/display')
  }



  return (
     <div className='container mt-3 p-3'>
        <form onSubmit={handleSubmit(updateData)}>
            <h3 className='text-center'>Student Form</h3>
            <label className='form-label mb-2'>Roll : </label>
            <input type="number" className='form-control mb-2' {...register('roll')}/>

            <label className='form-label mb-2'>Name : </label>
            <input type="text" className='form-control mb-2' {...register('name')}/>

            <label className='form-label mb-2'>Marks : </label>
            <input type="number" className='form-control mb-3' {...register('marks')}/>
            <button className='btn btn-outline-success'>Update Student</button>
        </form>
    </div>
    
  )
}

export default UpdateStudent