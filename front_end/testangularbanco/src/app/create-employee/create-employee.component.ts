import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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


  constructor() {
    
   }

  ngOnInit(): void {
  }

  postInformation(){
    console.log(this.id.value)
  }

}
