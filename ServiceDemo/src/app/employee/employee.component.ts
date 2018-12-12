import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empId : number;
  empMgrId : number;
  employee : Observable<Employee[]>
  constructor( private route : ActivatedRoute, private employeeService : EmployeeService, private router : Router) {
    this.employee = employeeService.getEmployee();
    this.empId=parseInt(this.route.snapshot.params["empId"]);
  }
  
  showAll(empId,empMgrId)
  {
    this.router.navigate(['/Login']);
   // this.router.navigate(['/Dashboard',empId,empMgrId]);
  }

  ngOnInit() {
  }

}
