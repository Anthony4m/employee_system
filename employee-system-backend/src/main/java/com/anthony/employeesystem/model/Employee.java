package com.anthony.employeesystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    private Long id;
    private String firstname;
    private String lastname;
    private String email;
}
