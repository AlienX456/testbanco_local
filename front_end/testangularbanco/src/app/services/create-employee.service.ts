import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee'
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeService {

  private baseURL;

  constructor(private httpClient:HttpClient) { 
    this.baseURL =  'http://localhost:4000/employee';
  }

  writeEmployee(new_employee){
    return this.httpClient.post(this.baseURL,new_employee);
  }



}
