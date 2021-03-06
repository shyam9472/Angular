  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Observable } from 'rxjs';
  import { Employee } from "./employee";
  import 'rxjs/add/operator/map';
  import { LeaveDetails } from './leave-details';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {

    constructor(private http: Http) { }
    getEmployee(): Observable<Employee[]> {
      return this.http.get
      ("http://localhost:8080/ftp85/api/employees")
        .map((res: Response) => res.json());
    }
    showEmploy(empId): Observable<Employee> {
      if(empId != 0) {
      return this.http.get
      ("http://localhost:8080/ftp85/api/employees/" +empId)
        .map((res: Response) => res.json());
      } else {
        return this.http.get
        ("No Manager" +empId)
        .map((res: Response) => res.json());
      }
    }
    applyLeave(leavedetails:LeaveDetails,empId : number):Observable<String> { 
      // alert("Emp ID " +empId);
      return this.http.post('http://localhost:8080/ftp85/api/LeaveDetailsRest/LDApplyLeave/' +empId,leavedetails)
      .map(response=>response.text())
    }

    showPending(empId):Observable<LeaveDetails[]>{
      return this.http.get("http://localhost:8080/ftp85/api/LeaveDetailsRest/pending/" +empId).map((res : Response) => res.json());
    }

    showHistory(empId):Observable<LeaveDetails[]>{
      return this.http.get("http://localhost:8080/ftp85/api/LeaveDetailsRest/history/" +empId).map((res : Response) => res.json());
    }

    getLeave(leaId):Observable<LeaveDetails[]>{
      return this.http.get("http://localhost:8080/ftp85/api/LeaveDetailsRest/" +leaId).map((res : Response) => res.json());
    }

    approveDeny(leavedetails:LeaveDetails,empMgrId : number):Observable<String> { 
      // alert("Emp ID " +empId);
      return this.http.post('http://localhost:8080/ftp85/api/LeaveDetailsRest/LeaveDetailsApproveDeny/' +empMgrId,leavedetails)
      .map(response=>response.text())
    }
  
  }
