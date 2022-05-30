import axios from "axios";
import Employees from "../Employees";

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL,employee);
    }

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL)
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL + "/" + id)
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_URL + "/" + id);
    }

    updateEmployeeById(employee,id){
        return axios.put(EMPLOYEE_BASE_URL + "/" + id, employee);
    }
}

export default new EmployeeService();