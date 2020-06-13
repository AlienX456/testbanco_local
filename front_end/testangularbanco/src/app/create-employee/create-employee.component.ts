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
    let new_employee : Employee ={
      id : this.id.value,
      fullname : this.fullname.value,
      function : this.function.value,
      boss : this.boss.value,
    }
    this.createEmployeeService.writeEmployee(new_employee).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

}
