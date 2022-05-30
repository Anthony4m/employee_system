package com.anthony.employeesystem.services;

import com.anthony.employeesystem.entity.EmployeeEntity;
import com.anthony.employeesystem.model.Employee;
import com.anthony.employeesystem.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getEmployees() {
        List<EmployeeEntity> employeeEntity = employeeRepository.findAll();
        List<Employee> employees = employeeEntity.stream().map(emp -> new Employee(
                emp.getId(),
                emp.getFirstname(),
                emp.getLastname(),
                emp.getEmail()
        )).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();

        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setFirstname(employee.getFirstname());
        employeeEntity.setLastname(employee.getLastname());
        employeeRepository.save(employeeEntity);

        return employee;
    }
}
