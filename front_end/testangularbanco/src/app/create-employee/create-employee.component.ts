import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreateEmployeeService } from 'src/app/services/create-employee.service'
import { Employee } from 'src/app/interfaces/employee'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  id = new FormControl('');
  fullname = new FormControl('');
  function = new FormControl('');
  boss = new FormControl('');


  constructor(private createEmployeeService:CreateEmployeeService) {
    
   }

  ngOnInit(): void {
  }

  postInformation(){

    let new_employee = {
      id : Number(this.id.value),
      fullname : this.fullname.value,
      employeeFunction : this.function.value,
      boss : Number(this.boss.value),
    }

    if (new_employee.boss ==0){
      new_employee.boss = null;
    }

    if (new_employee.id <= 0){
      alert('Value not allowed for employee ID, must be grater than 0');
    }else if(new_employee.boss < 0){
      alert('Value not allowed for employee boss, must be grater than 0');
    }else{
      this.createEmployeeService.writeEmployee(new_employee).subscribe(
        data => alert('success!!'),
        error => alert('oops!! '+ error.error.detail)
      );
    }


  }

}
