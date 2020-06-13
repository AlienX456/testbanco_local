import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee'
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestEmployeeListService {

  private baseURL;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = `http://localhost:4000/employee-all`;
  }

  getAllEmployees(){
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
}
