import { Component, OnInit } from '@angular/core';
import { RequestEmployeeListService } from 'src/app/services/request-employee-list.service'
import { Employee } from 'src/app/interfaces/employee'

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  public employeeList :Employee[];

  constructor(private requestEmployeeListService:RequestEmployeeListService) {
    requestEmployeeListService.getAllEmployees().subscribe(
      data =>{
        this.employeeList = data;
      }
    );

   }

  ngOnInit(): void {
  }

}
