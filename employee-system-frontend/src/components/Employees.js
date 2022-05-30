import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Employee from './Employee';
import EmployeeService from './service/EmployeeService';

const Employees = () => {
    const navigate = useNavigate();
    const [employees,setEmployee] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try{
        const response = await EmployeeService.getEmployees();
        setEmployee(response.data)
            }catch(error){
                console.log(error)
            }
            setLoading(false)
        };
        fetchData();
    }, []);

    const deleteEmployee = (e,id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res)=>{
             if (employees) {
                setEmployee((prevElement)=>{
                    return prevElement.filter((employee)=> employee.id !== id);
                })
            }
        })
    }
    
  return (
    <>
    <div className='container mx-auto my-8'>
    <div className='h-12'>
        <button onClick={()=>navigate("/addemployee")} className='rounded bg-slate-600 text-white px-6 py-4'>Add employee</button>
    </div>
    <div className='flex shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email</th>
                    <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                </tr>
            </thead>
            {!loading && (
            <tbody className='bg-white'>
                {employees.map((employee)=>(
                <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>
                   ))}
            </tbody>
            )}
        </table>
    </div>
    </div>
    </>
  )
}

export default Employees