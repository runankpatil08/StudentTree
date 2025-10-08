
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router'


function AddStudent() {
    const {handleSubmit,register} = useForm()
    const nav=useNavigate()
    async function saveData(data){
        try{
            const res=await axios.post('https://ca500b916d93d560ff72.free.beeceptor.com/api/users/',data)
            alert('Successfull...')
            console.log("res-->",res)
            nav('/display')

        }
        catch(error){
            alert('Something went wrong..!')
        }

    }
  return (
    <div className='container mt-3 p-3'>
        <form onSubmit={handleSubmit(saveData)}>
            <h3 className='text-center'>Student Form</h3>
            <label className='form-label mb-2'>Roll : </label>
            <input type="number" className='form-control mb-2' {...register('roll')}/>

            <label className='form-label mb-2'>Name : </label>
            <input type="text" className='form-control mb-2' {...register('name')}/>

            <label className='form-label mb-2'>Marks : </label>
            <input type="number" className='form-control mb-3' {...register('marks')}/>
            <button className='btn btn-outline-success'>Add Student</button>
        </form>
    </div>
  )
}

export default AddStudent