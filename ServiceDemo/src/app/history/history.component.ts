import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  leavedetails: Observable<LeaveDetails[]>;
  empId :number;
  flagp : number;
  employee : Observable<Employee[]>
  constructor(private employeeService : EmployeeService,private route:ActivatedRoute) {
    // this.employee = employeeService.getEmployee();
    this.empId=parseInt(this.route.snapshot.params["empId"]);
    // alert(this.empId);
    this.leavedetails = employeeService.showHistory(this.empId);
    this.flagp = parseInt(this.route.snapshot.params["empId"]);
    // alert(this.flagp);
  }

  ngOnInit() {
  }

}
