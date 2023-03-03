package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Employees;
import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.Service.EmployeeService;
@RestController
@CrossOrigin
@RequestMapping("/employees")
public class EmployeeController {
	@Autowired EmployeeRepository employeeRepository;
	@Autowired EmployeeService employeeService;
	@PostMapping("/")
	public Employees GetFn(@RequestBody Employees emp){
		return employeeRepository.save(emp);
	}
	@PutMapping("/{id}")
	public Employees PutFn(@PathVariable int id,@RequestBody Employees emp){
		return employeeRepository.save(emp);
	}
	@GetMapping("/{id}")
	public Optional<Employees> GetFn(@PathVariable int id){
		return employeeRepository.findById(id);
	}
	@GetMapping("/get")
	public List<Employees> GeAlltFn(){
		return employeeRepository.findAll();
	}
	@DeleteMapping("/id")
	public String DeleteFn(@PathVariable int id) {
		employeeRepository.deleteById(id);
		return "Employee deleted Successfully";
		
	}
	@GetMapping(value="/sort/{field}")
    List <Employees> informSort(@PathVariable String field){
	return  employeeService.sortinform(field);
    }
    @GetMapping(value="/paging/{page}/{size}")
    public Page<Employees> pagingc (@PathVariable int page,@PathVariable int size){
	return employeeService.paging(page,size);
    }
    @GetMapping(value="/sortandpage/{page}/{size}/{field}")
    public Page<Employees> SortingdndPaging(@PathVariable int page,@PathVariable int size,@PathVariable String field){
	return employeeService.SortingAndPaging(page,size,field);
    }
}