import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './service/EmployeeService';

const EditEmployee = () => {

    const {id} = useParams();
    const navigate = useNavigate('');
    const [employee, setEmployee] = useState({
        id: id,
        firstname:"",
        lastname:"",
        email:""
    })

    const cancel = (e)=>{
        e.preventDefault();
        navigate("/employeelist")

    }

    useEffect(() => {
      const fetchData = async ()=>{
          try{
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data)
          }catch(error){
              console.log(error);
          }
      }
      fetchData();
    }, [])
    

    

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value});
    }

    const updateEmployee = (e)=>{
        e.preventDefault();
        EmployeeService.updateEmployeeById(employee,id)
        .then((response)=>{
            navigate("/employeelist")
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
    <div className='px-8 py-8'>
        <div className=' font-thin text-2xl tracking-wider'>
            <h1>Update Employee</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>First Name</label>
            <input name="firstname" 
            value={employee.firstname} 
            onChange={(e)=>{handleChange(e)}}
            type="text"
             className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
            <input 
            type="text" 
            onChange={(e)=>{handleChange(e)}}
            name='lastname' 
            value={employee.lastname} 
            className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>Email</label>
            <input type="Email"
            onChange={(e)=>{handleChange(e)}}
            name='email'
            value={employee.email}
             className='h-10 w-96 border mt-2 px-2 py-2'></input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
           <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Update</button>
           <button
           onClick={(e)=>cancel(e)}
            className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Cancel</button>
        </div>
    </div>
</div>
  )
}

export default EditEmployee